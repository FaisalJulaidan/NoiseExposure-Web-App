import React from 'react'
import {Switch, Tooltip} from 'antd';
import styles from './ShowOwnDataSwitch.module.css';

class ShowOwnDataSwitch extends React.Component {
    state = {
        on: false
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.loggedIn){

        }
    }

    switch = (value) => {
        this.props.filerOwnData(value)
    };

    render() {
        return (
            <>
                <Tooltip title="Login first please!" visible={!(!!this.props.loggedIn)} trigger={'hover'}>
                    <Switch checkedChildren={"View public data"}
                            disabled={!(!!this.props.loggedIn)}
                            unCheckedChildren={"View Your own Data"} type="primary"
                            onClick={this.switch} className={styles.Switch}>
                        Show Your Own Data
                    </Switch>
                </Tooltip>

            </>

        );
    }
}

export default ShowOwnDataSwitch;

