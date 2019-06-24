import React from 'react';
import { connect } from 'react-redux';
import getBookListAction from '../../actions/getBookListAction';
// import executeBorrow from '../../actions/borrowAction';
import executeReturn from '../../actions/returnBook';
import { Table, Button, Alert, Spin, Modal } from 'antd';

class BookList extends React.Component {
  componentDidMount() {
    const { getBookList } = this.props;
    getBookList && getBookList();
    // this.handleBorrowAfter();
  }

  renderLoadingMessage = () => {
    const { bookList } = this.props;
    return bookList.loading;
  };

  //borrow event
  handleBorrowClick(bookid) {
    const { borrowBook } = this.props;
    borrowBook && borrowBook('joe', bookid);
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
    console.log('props', this.props);
    const { borrow } = this.props;
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookList: state.bookList,
  borrow: state.borrowStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getBookList: () => getBookListAction()(dispatch),
  returnBook: (username, bookid) => executeReturn(username, bookid)(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
