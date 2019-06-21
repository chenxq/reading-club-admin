import React from 'react';
import { connect } from 'react-redux';
import getBookListAction from '../../actions/getBookListAction';
import deleteBookAction from '../../actions/deleteBookAction';
import { Table, Button, Spin, Alert } from 'antd';
import DeleteModal from '../../components/DeleteModal';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookID: 0,
      visible: false,
    };
  }

  componentDidMount() {
    const { getBookList } = this.props;
    getBookList && getBookList();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  deleteBook = () => {
    const { deleteBook } = this.props;
    const { bookID } = this.state;
    deleteBook && deleteBook(bookID);
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  renderLoadingMessage = () => {
    const { bookList } = this.props;
    return bookList.loading;
  };

  handleDelete(id) {
    this.setState({
      bookID: id,
      visible: true,
    });
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
                onClick={() => {
                  this.handleDelete(record.id);
                }}
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
    const { bookID, visible } = this.state;

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
        <DeleteModal
          bookID={bookID}
          title="Modal"
          visible={visible}
          onOk={this.deleteBook}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>确定删除该书籍吗？`${this.state.bookID}`</p>
        </DeleteModal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookList: state.bookList,
  bookID: state.bookID,
});

const mapDispatchToProps = (dispatch) => ({
  getBookList: () => getBookListAction()(dispatch),
  deleteBook: (bookID) => deleteBookAction(bookID)(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
