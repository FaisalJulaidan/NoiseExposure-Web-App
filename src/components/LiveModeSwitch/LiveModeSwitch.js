import React from 'react'
import {Switch} from 'antd';
import styles from './LiveModeSwitch.module.css';

class LiveModeSwitch extends React.Component {


    // based on switch status, noise data should filter or not
    switch = (value) => {
        console.log(value);
        this.props.switchLiveMode(value);
    };

    render() {
        return (
            <div className={styles.Container}>
                    <Switch
                        checked={this.props.liveMode}
                        unCheckedChildren={"Live Mode"}
                        checkedChildren={"Live Mode"}
                        type="primary"
                        onClick={this.switch}
                        className={styles.Switch}
                    />
            </div>

        );
    }
}

export default LiveModeSwitch;

