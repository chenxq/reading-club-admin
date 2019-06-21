import React from 'react';
import { PageHeader, Input, Button, Form, Spin } from 'antd';
import { connect } from 'react-redux';
import addBookAction from '../actions/addBookAction';

class AddBookView extends React.Component {
  constructor(props) {
    super();
  }

  handleSubmit = (e) => {
    const { addBook } = this.props;

    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.price = Number(values.price);
        this.setState({
          status: 1,
        });
        addBook(values);
      }
    });
  };

  renderForm = () => {
    const { addBookInfo } = this.props;
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <Spin spinning={addBookInfo.loading === 'start'}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="书名">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: '请输入书名!',
                  whitespace: true,
                },
              ],
            })(<Input id="bookName" placeholder="请输入书名" />)}
          </Form.Item>
          <Form.Item label="作者">
            {getFieldDecorator('author', {
              rules: [
                {
                  required: true,
                  message: '请输入作者!',
                  whitespace: true,
                },
              ],
            })(<Input id="author" placeholder="请输入作者" />)}
          </Form.Item>
          <Form.Item label="ISBN">
            {getFieldDecorator('ISBN', {
              rules: [
                {
                  whitespace: true,
                },
              ],
            })(<Input id="ISBN" placeholder="请输入ISBN" />)}
          </Form.Item>
          <Form.Item label="出版社">
            {getFieldDecorator('press', {
              rules: [
                {
                  whitespace: true,
                },
              ],
            })(<Input id="press" placeholder="请输入出版社" />)}
          </Form.Item>
          <Form.Item label="价格">
            {getFieldDecorator('price', {
              rules: [
                {
                  whitespace: true,
                },
              ],
            })(<Input id="price" placeholder="请输入价格" />)}
          </Form.Item>
          <Form.Item label="封面">
            {getFieldDecorator('imageUrl', {
              rules: [
                {
                  whitespace: true,
                },
              ],
            })(<Input id="picture" placeholder="请输入封面图片url" />)}
          </Form.Item>
          <Form.Item label="简介">
            {getFieldDecorator('description', {
              rules: [
                {
                  whitespace: true,
                },
              ],
            })(<Input id="description" placeholder="请输入简介" />)}
          </Form.Item>
          <Form.Item label="豆瓣链接">
            {getFieldDecorator('doubanUrl', {
              rules: [
                {
                  whitespace: true,
                },
              ],
            })(<Input id="moreLink" placeholder="请输入豆瓣链接" />)}
          </Form.Item>

          <Form.Item>
            <Button type="primary" style={{ margin: 16 }} htmlType="submit">
              保存
            </Button>
            <Button
              href="/home/bookList"
              type="primary"
              style={{ marginBottom: 16, marginTop: 16, marginRight: 20 }}
            >
              取消
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    );
  };

  render() {
    return (
      <div>
        <PageHeader title="添加书籍" />
        {this.renderForm()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addBookInfo: state.addBook,
});

const mapDispatchToProps = (dispatch) => ({
  addBook: (bookInfo) => addBookAction(bookInfo)(dispatch),
});

const AddBookForm = Form.create({ name: 'addbook' })(AddBookView);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBookForm);
