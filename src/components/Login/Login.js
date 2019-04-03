import React from 'react'
import styles from '../../Layouts/MainLayout/MainLayout.module.css';
import { Modal, Switch, Form, Icon, Input} from 'antd';
import {http} from '../../utilities';
class Login extends React.Component {
    state = { 
        visible: false,
        email: '',
        password: '' 
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onLogin(values.email, values.password)
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Modal
                    title="Login"
                    visible={this.props.visible}
                    onOk={this.handleSubmit}
                    onCancel={this.props.closeModal}
                >
                    <Form className="login-form">
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }, {type: 'email', message: 'The input is not valid E-mail!',}], 
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </Form.Item>
                        {/*the above code contains rules, this allows for you to add some extra validation to the form as the antD form
                        knows what an email is and should look like so adding a rule for the type to be email will enforce that whatever is
                        in the field is in fact an email*/}
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
                            {/* <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button> */}
                            {/* Or <a href="">register now!</a> */}
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'horizontal_login' })(Login);
export default WrappedNormalLoginForm;

