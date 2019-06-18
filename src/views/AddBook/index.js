import React from "react";
import { PageHeader, Input, Button } from 'antd';
import { connect } from "react-redux";
import postBook from "../../services/postBook";
import addBook from "../../actions/addBook";

const { TextArea } = Input;

class AddBook extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userInput: {
        ID: 2
      },
    };
  }

  bookInforFromUser() {
    this.setState({
      userInput: {
        // ...this.state.userInput,
        bookName: document.getElementById("bookName").value,
        author: document.getElementById("author").value,
        ISBN: document.getElementById("ISBN").value,
        press: document.getElementById("press").value,
        price: document.getElementById("price").value,
        picture: document.getElementById("picture").value,
        decription: document.getElementById("decription").value,
        moreLink: document.getElementById("moreLink").value
      }
    });
  }

  render() {
    return (
      <div>
        <PageHeader title="添加书籍" />
        <div>
          <p>ID: </p>
          <p>书名: </p>
          <Input id="bookName" placeholder="请输入书名" />
          <p>作者: </p>
          <Input id="author" placeholder="请输入作者" />
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
          <Button href="/home/bookList" type="primary" style={{ marginBottom: 16, marginTop: 16, marginRight: 20 }}>
            取消
          </Button>
          <Button onclick={this.bookInforFromUser()} type="primary" style={{ marginBottom: 16, marginTop: 16 }}>
            保存
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bookInfor: state.userInput
});

const mapDispatchToProps = dispatch => ({
  getBookDetail: bookInfor => postBook(bookInfor)(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook);
