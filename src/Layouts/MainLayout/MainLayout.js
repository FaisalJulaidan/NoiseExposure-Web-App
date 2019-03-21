import React from 'react';
import { Layout, Menu, Button} from 'antd';
import styles from './MainLayout.module.css';
import TableView from '../../components/TableView/TableView'
import MapView from '../../components/MapView/MapView';
import {Route, Switch} from 'react-router-dom';
import {history} from "../../utilities";
import Login from '../../components/Login/Login'

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => {

    const handleMenuClick = (e) => {
        if(!(e.key)) return;
        history.push(`${e.key}`)
    };

    const onLogOut = (e) => {
        localStorage.clear();
        console.log('Cleared')
    };

    return (
        <Layout className={styles.Layout}>

            <Header className={styles.Header}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    className={styles.Menu}
                    onClick={handleMenuClick}
                >
                    <Menu.Item key="/">Table View</Menu.Item>
                    <Menu.Item key="/mapView">Map</Menu.Item>
                    <Menu.Item key="/about">About</Menu.Item>
                    <Button 
                        className={styles.LogOutBtn}
                        onClick={onLogOut}>Log Out</Button>
                </Menu>
            </Header>
            <Login />

            <Content className={styles.Content}>

                <Switch>
                    <Route path={'/'} exact render={routeData => {
                        return <TableView noiseData={props.noiseData}/>
                    }}
                    />
                    <Route path={'/mapView'} render={routeData => {
                        return <MapView noiseData={props.noiseData}/>
                    }}
                    />
                </Switch>

            </Content>


            <Footer className={styles.Footer}>

            </Footer>
        </Layout>
    );
};

export default MainLayout;