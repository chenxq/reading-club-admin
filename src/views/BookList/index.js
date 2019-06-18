import React from 'react';
import { connect } from 'react-redux';
import getBookList from '../../actions/getBookList';
import { Table, Button } from 'antd';

import borrowBookService, {
  addBook,
  getBookList as getBookListService,
} from '../../services/borrowBook';

class BookList extends React.Component {
  componentDidMount() {
    const { getBookList } = this.props;
    getBookList && getBookList();
  }

  renderLoadingMessage = () => {
    const { bookList } = this.props;
    return bookList.loading;
  };

  renderBookList = () => {
    const {
      bookList: { bookListArray },
    } = this.props;
    return bookListArray;
  };

  handleBorrowBook = async () => {
    const ret = await borrowBookService({ username: 'joe', bookID: 2 });
    console.log('borrow book', ret);
  };

  handleAddBook = async () => {
    const ret = await addBook({ name: 'some book', author: 'some author' });
    console.log('add book', ret);
  };

  handleBookList = async () => {
    const ret = await getBookListService({ username: 'john' });
    console.log('get book list', ret);
  };

  render() {
    const columns = [
      {
        title: '图书编号',
        dataIndex: 'id',
      },
      {
        title: '图书名称',
        dataIndex: 'name',
      },
      {
        title: '作者',
        dataIndex: 'author',
      },
      {
        title: '简介',
        dataIndex: 'description',
      },
      {
        title: '封面',
        render: (record) => {
          return <img src={record.imageUrl} style={{ height: '100px' }} />;
        },
      },
      {
        title: '操作',
      },
    ];

    return (
      <div>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={this.renderBookList()}
        />
        <Button type="primary" onClick={this.handleBorrowBook}>
          Borrow a Book
        </Button>
        <Button type="primary" onClick={this.handleAddBook}>
          Add a Book
        </Button>
        <Button type="primary" onClick={this.handleBookList}>
          Get Book List
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

const mapDispatchToProps = (dispatch) => ({
  getBookList: () => getBookList()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
