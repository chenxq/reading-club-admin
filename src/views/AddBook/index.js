import React from 'react';
import { PageHeader, Input, Button, Form } from 'antd';
import { connect } from 'react-redux';
import postBook from '../../services/postBook';
import addBook from '../../actions/addBook';

const { TextArea } = Input;

class AddBook extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userInput: {
        ID: 2,
      },
    };
  }

  bookInforFromUser() {
    this.setState({
      userInput: {
        // ...this.state.userInput,
        bookName: document.getElementById('bookName').value,
        author: document.getElementById('author').value,
        ISBN: document.getElementById('ISBN').value,
        press: document.getElementById('press').value,
        price: document.getElementById('price').value,
        picture: document.getElementById('picture').value,
        decription: document.getElementById('decription').value,
        moreLink: document.getElementById('moreLink').value,
      },
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.error('Received values of form: ', values);
      }
    });
  };

  render() {
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
      <div>
        <PageHeader title="添加书籍" />
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="书名">
            {getFieldDecorator('bookName', {
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

          <Form.Item>
            <Button
              href="/home/bookList"
              type="primary"
              style={{ marginBottom: 16, marginTop: 16, marginRight: 20 }}
            >
              取消
            </Button>
            <Button
              type="primary"
              style={{ marginBottom: 16, marginTop: 16 }}
              htmlType="submit"
            >
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

/** 
<p>ISBN: </p>
          <Input id="ISBN" placeholder="请输入ISBN" />
          <p>出版社: </p>
          <Input id="press" placeholder="请输入出版社" />
          <p>价格: </p>
          <Input id="price" placeholder="请输入价格" />
          <p>图片: </p>
          <Input id="picture" placeholder="请输入图片URL" />
          <p>简介: </p>
          <TextArea id="description" placeholder="请输入简介" rows={4} />
          <p>豆瓣链接: </p>
          <Input id="moreLink" placeholder="请输入豆瓣链接" />
        </div>
        <div>
*/

const mapStateToProps = (state) => ({
  bookInfor: state.userInput,
});

const mapDispatchToProps = (dispatch) => ({
  getBookDetail: (bookInfor) => postBook(bookInfor)(dispatch),
});

const AddBookForm = Form.create({ name: 'addbook' })(AddBook);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBookForm);
