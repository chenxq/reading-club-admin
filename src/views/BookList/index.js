import React from 'react';
import { connect } from 'react-redux';
import getBookList from '../../actions/getBookList';
import BookListItem from '../../components/BookListItem';
import { List } from 'antd';

class BookList extends React.Component {
  componentDidMount() {
    const { getBookList } = this.props;
    getBookList && getBookList();
  };

  renderLoadingMessage = () => {
    const { bookList } = this.props;
    return bookList.loading || 'empty';
  }

  renderBookList = () => {
    const { bookList: { bookListArray } } = this.props;
    return bookListArray;
  }

  render() {
    return (
      <div>
        <div>
          <List
            itemLayout="horizontal"
            dataSource={this.renderBookList()}
            renderItem={item => (
              BookListItem(item)
            )}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bookList: state.bookList,
});

const mapDispatchToProps = dispatch => ({
  getBookList: () => getBookList()(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
