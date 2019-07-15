import React from 'react';
import { connect } from 'react-redux';
import authAction from '../../actions/authAction';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.css';

class AuthView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userName: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    const { auth, dispatch } = this.props;

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState(
          {
            status: 1,
          },
          () => {
            dispatch(authAction(authInfo));
          },
        );
        auth(values);
      }
    });
  };

  componentDidUpdate() {
    const { history, loginInfo } = this.props;
    if (loginInfo.loading === 'success') {
      history.push('/home/booklist');
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    // const { history } = this.props;
    return (
      <div className="form">
        <span className="logo">Reading Club</span>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)} */}
            {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginInfo: state.auth,
});

// const mapDispatchToProps = (dispatch) => ({
//   auth: (authInfo) => authAction(authInfo)(dispatch),
// });

const AuthForm = Form.create({ name: 'Login' })(AuthView);

export default connect(mapStateToProps)(AuthForm);
// mapStateToProps,
// mapDispatchToProps,
