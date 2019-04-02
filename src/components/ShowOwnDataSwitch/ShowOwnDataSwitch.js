import React from 'react'
import {Switch, Tooltip} from 'antd';
import styles from './ShowOwnDataSwitch.module.css';

class ShowOwnDataSwitch extends React.Component {
    state = {
        on: false
    };

    constructor(props){
        super(props);
        this.switchEle = React.createRef();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // when user logged out, the switch should go off
        if(nextProps.loggedIn !== this.props.loggedIn && !nextProps.loggedIn){
            this.setState({on: false});
            this.props.filterOwnData(false);
        }
    }

    // based on switch status, noise data should filter or not
    switch = (value) => {
        this.setState({on: value});
        this.props.filterOwnData(value);
    };

    render() {
        return (
            <div className={styles.Container}>
                <Tooltip title="Login first please!" visible={!(!!this.props.loggedIn)} trigger={'hover'}>
                    <Switch
                            checked={this.state.on}
                            disabled={!(!!this.props.loggedIn)}
                            checkedChildren={"View Your Own Data"}
                            unCheckedChildren={"View Your Own Data"}
                            type="primary"
                            onClick={this.switch} className={styles.Switch}
                            ref={this.switchEle}>
                        Show Your Own Data
                    </Switch>
                </Tooltip>

            </div>

        );
    }
}

export default ShowOwnDataSwitch;

