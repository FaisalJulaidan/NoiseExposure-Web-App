import React from 'react'
import styles from '../../Layouts/MainLayout/MainLayout.module.css';
import { Modal, Switch, Form, Icon, Input, Button, Checkbox } from 'antd';
import {http} from '../../utilities';
//import Form from "antd/lib/form/Form";
class Login extends React.Component {
    state = { 
        visible: false,
        email: '',
        password: '' 
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.onLogIn(values.email, values.password)
            }
        });
    }

    onLogIn = (email, password) => {
        console.log("User Logged In")
        http.post('/auth', {email, password})
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Switch checkedChildren={"View public data"} unCheckedChildren={"View Your own Data"} type="primary" onClick={this.showModal} className={styles.Switch}>
                    Show Your Own Data
                </Switch>
                <Modal
                    title="Login"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }, {type: 'email', message: 'The input is not valid E-mail!',}], 
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {/* {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a> */}
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.onLogIn}>
                                Log in
                            </Button>
                            {/* Or <a href="">register now!</a> */}
                        </Form.Item>
                    </Form>
                </Modal>
            </div>

        );
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'horizontal_login' })(Login);
export default WrappedNormalLoginForm;

