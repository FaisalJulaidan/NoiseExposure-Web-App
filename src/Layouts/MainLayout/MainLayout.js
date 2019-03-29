import React from 'react';
import { Layout, Menu, Button} from 'antd';
import styles from './MainLayout.module.css';
import TableView from '../../components/TableView/TableView'
import MapView from '../../components/MapView/MapView';
import {Route, Switch} from 'react-router-dom';
import {history, http, checkAuthenticity} from "../../utilities";
import Login from '../../components/Login/Login';
import ShowOwnDataSwitch from '../../components/ShowOwnDataSwitch/ShowOwnDataSwitch'

const { Header, Content, Footer } = Layout;


class MainLayout extends React.Component {
    state = {
        loggedIn: false,
        visible: false
    };

    componentWillMount() {
        // Check if user logged in before even on page refreash which causes the state to be lost
        this.setState({loggedIn: !!checkAuthenticity()})
    }

    handleMenuClick = (e) => {
        if(!(e.key)) return;
        history.push(`${e.key}`)
    };

    // login modal
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    // login modal
    closeModal = () => {
        this.setState({
            visible: false,
        });
    };


    onLogin = (email, password) => {
        http.post('/auth', {email, password})
            .then(response => {
                console.log(response);
                localStorage.setItem("user", JSON.stringify(response.data.data.user));
                localStorage.setItem("token", response.data.data.token);
                localStorage.setItem("refresh", response.data.data.refresh);
                this.setState({loggedIn: !!checkAuthenticity()});
                this.closeModal();
            })
            .catch(function (error){
                console.log(error)
            })
    };

    onLogOut = (e) => {
        localStorage.clear();
        this.setState({loggedIn: false}); // set logged in to false
        console.log('LocalStorage Cleared => Logged out')
    };



    render() {
        return (
            <Layout className={styles.Layout}>

                <Header className={styles.Header}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        className={styles.Menu}
                        onClick={this.handleMenuClick}
                    >
                        <Menu.Item key="/">Table View</Menu.Item>
                        <Menu.Item key="/mapView">Map</Menu.Item>
                        <Menu.Item key="/about">About</Menu.Item>
                        <Button
                            className={styles.LogOutBtn}
                            onClick={this.state.loggedIn ? this.onLogOut : this.showModal}>
                            {this.state.loggedIn ? 'Logout' : 'Login'}
                        </Button>
                    </Menu>
                </Header>

                <Login onLogin={this.onLogin} visible={this.state.visible} showModal={this.showModal} closeModal={this.closeModal}/>

                <Content className={styles.Content}>
                    <ShowOwnDataSwitch loggedIn={this.state.loggedIn} filerOwnData={this.props.filerOwnData}/>
                    <Switch>
                        <Route path={'/'} exact render={routeData => {
                            return <TableView noiseData={this.props.noiseData}/>
                        }}
                        />
                        <Route path={'/mapView'} render={routeData => {
                            return <MapView noiseData={this.props.noiseData}/>
                        }}
                        />
                    </Switch>

                </Content>

                <Footer className={styles.Footer}>

                </Footer>
            </Layout>
        );
    }
}

export default MainLayout;