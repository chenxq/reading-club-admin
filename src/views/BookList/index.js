import React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import getBookListAction from '../../actions/getBookListAction';

import deleteBookAction, {
  resetDeleteStatus,
} from '../../actions/deleteBookAction';
import { Table, Button, Spin, Alert, Modal } from 'antd';
import DeleteModal from '../../components/DeleteModal';
import executeBorrow from '../../actions/borrowAction';


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
    // this.handleBorrowAfter();
  }

  showBorrowOpResult(result, titleStr, contentStr) {
    if (result === 1) {
      Modal.success({
        title: `${titleStr} [${contentStr.msg.name}]`,
        maskClosable: true,
      });
    } else if (result === 0) {
      Modal.error({
        title: `${titleStr} [${contentStr.msg.msg}]`,
        maskClosable: true,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const path = 'deleteStatus.loading';
    const prevLoading = get(prevProps, path, undefined);
    const loading = get(this.props, path, undefined);

    if (prevLoading && prevLoading !== loading && loading === 'failure') {
      Modal.warning({
        title: '删除书籍出错，请稍后再试！',
        maskClosable: true,
      });
    }

    if (prevLoading && prevLoading !== loading && loading === 'success') {
      Modal.success({
        title: '成功删除！',
        maskClosable: true,
      });
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  deleteBook = () => {
    const { deleteBook } = this.props;
    const { bookInfo } = this.state;
    this.setState({ visible: false });
    deleteBook && deleteBook(bookInfo && bookInfo.id);
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

<<<<<<< HEAD
=======
  handleDelete(bookInfo) {
    this.setState({
      bookInfo,
      visible: true,
    });
  }

>>>>>>> origin/master
  //borrow event
  handleBorrowClick(bookid) {
    const { borrowBook } = this.props;
    borrowBook && borrowBook('joe', bookid);
<<<<<<< HEAD
    // borrow && alert(borrow('joe', bookid));
  }

  // handleBorrowAfter = () => {
  //   console.log('处理后面');
  //   const { borrowBtn } = this.props;
  //   return (
  //     <Alert
  //       message={borrowBtn.msg}
  //       description={'操作结果' || ''}
  //       type="success"
  //       showIcon
  //     />
  //   );
  // };

=======
  }

>>>>>>> origin/master
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
<<<<<<< HEAD
            return (
              <div>
              <Button
                type="primary"
                onClick={(e) => {
                  this.handleBorrowClick(record.id);
                }}
              >
                借阅
              </Button>
              <Button
                type="primary"
                onClick={(e) => {
                  this.handleReturnClick(record.id);
                }}
              >
                还书
              </Button>
=======
            console.log('===>Button record', record);
            return (
              <div>
                <Button
                  id={record.id}
                  type="primary"
                  onClick={() => {
                    this.handleDelete(record);
                  }}
                >
                  删除
                </Button>
                <Button
                  type="primary"
                  style={{ marginTop: '5px' }}
                  onClick={(e) => {
                    this.handleBorrowClick(record.id);
                  }}
                >
                  借阅
                </Button>
>>>>>>> origin/master
              </div>
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
<<<<<<< HEAD
    console.log('props', this.props);
    const { borrow } = this.props;
=======
    const { bookInfo, visible } = this.state;
    const { borrow } = this.props;

>>>>>>> origin/master
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
<<<<<<< HEAD
        {borrow.loading === 'success'
          ? Modal.success({
              title: 'This is a success message',
              content: 'some messages...some messages...',
            })
          : borrow.loading === 'failure'
          ? Modal.error({
              title: 'This is an error message',
              content: 'some messages...some messages...',
            })
          : null}
        }
=======
        <DeleteModal
          bookInfo={bookInfo}
          title="Modal"
          visible={visible}
          onOk={this.deleteBook}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>确定删除该书籍吗？`${this.state.bookID}`</p>
        </DeleteModal>
        {borrow.loading === 'success'
          ? this.showBorrowOpResult(1, '借阅成功', borrow)
          : borrow.loading === 'failed'
            ? this.showBorrowOpResult(0, '借阅失败', borrow)
            : null}
>>>>>>> origin/master
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookList: state.bookList,
<<<<<<< HEAD
=======
  deleteStatus: state.deleteBookInfo,
>>>>>>> origin/master
  borrow: state.borrowStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getBookList: () => getBookListAction()(dispatch),
<<<<<<< HEAD
  returnBook: (username, bookid) => executeReturn(username, bookid)(dispatch),
=======
  deleteBook: (bookID) => deleteBookAction(bookID)(dispatch),
  resetDeleteStatus: () => dispatch(resetDeleteStatus()),
  borrowBook: (username, bookid) => executeBorrow(username, bookid)(dispatch),
>>>>>>> origin/master
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
