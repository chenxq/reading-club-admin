import React from 'react';
import { connect } from 'react-redux';
import getBookList from '../../actions/getBookList';
import { Table, Button } from 'antd';

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
          return (
            <img src={record.imageUrl} alt="封面" style={{ height: '100px' }} />
          );
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
        <Button
          type="primary"
          onClick={() => {
            const { history } = this.props;
            history.push('/home/booklist/addBook');
          }}
        >
          添加书籍
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
