import React from 'react';
import { connect } from 'react-redux';
import getBookList from '../../actions/getBookList';
import { Table, Button } from 'antd';
import { Link, Route } from 'react-router-dom';
import AddBook from '../AddBook';

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
        {/*<Button
          href="/home/booklist/addBook"
          type="primary"
          style={{ marginBottom: 16 }}
        >
          添加书籍
        </Button>
        */}
        <Link to="/home/booklist/addBook">添加书籍</Link>
        <Route path="/home/booklist/addBook" component={AddBook} />
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
