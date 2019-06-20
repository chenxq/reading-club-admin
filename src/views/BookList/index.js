import React from 'react';
import { connect } from 'react-redux';
import getBookListAction from '../../actions/getBookListAction';
import { Table, Button, Spin, Alert } from 'antd';
import DeleteModal from '../../components/DeleteModal';

class BookList extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const { getBookList } = this.props;
    getBookList && getBookList();
  }

  renderLoadingMessage = () => {
    const { bookList } = this.props;
    return bookList.loading;
  };

  renderDeleteModal(bookID) {
    console.log('delete button click');
    console.log('book ID: ', bookID);
    return (
      <DeleteModal
        bookID={bookID}
        visible={true}
      />);
  }

  renderBookList = () => {
    const { bookList } = this.props;

    if (bookList.loading === 'failure') {
      return (
        <Alert
          message={bookList.msg}
          description={bookList.desc || ''}
          type="error"
          showIcon
        />
      );
    } else {
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
              <img
                src={record.imageUrl}
                alt="封面"
                style={{ height: '100px' }}
              />
            );
          },
        },
        {
          title: '操作',
          render: (record) => {
            return (
              <Button
                id={record.id}
                type="primary"
                onClick={() => { this.renderDeleteModal(record.id) }}
              >
                删除
              </Button>
            );
          },
        },
      ];

      return (
        <Spin spinning={bookList.loading === 'start'}>
          <Table
            rowKey="id"
            columns={columns}
            dataSource={bookList.bookListArray || []}
          />
        </Spin>
      );
    }
  };

  render() {
    return (
      <div>
        {this.renderBookList()}
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
  getBookList: () => getBookListAction()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
