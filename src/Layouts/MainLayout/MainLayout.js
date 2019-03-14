import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './MainLayout.module.css';
import TableView from '../../components/TableView/TableView'
import MapView from '../../components/MapView/MapView';
import {Route, Switch} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => {
    return (
        <Layout className={styles.Layout}>

            <Header className={styles.Header}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    className={styles.Menu}
                >
                    <Menu.Item key="1">Table View</Menu.Item>
                    <Menu.Item key="2">Map</Menu.Item>
                    <Menu.Item key="3">About</Menu.Item>
                </Menu>
            </Header>


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