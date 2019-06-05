import React from 'react';
import { connect } from 'react-redux';
import getBookList from '../actions/getBookList';


const mapStateToProps = (state) => {
    return {
        // message: state.message,
        bookList: state.bookListArray
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBookList: () => getBookList()(dispatch)
    };
  };

class BookList extends React.Component {
    componentDidMount() {
        this.props.getBookList();
    };

    render() {
        const {bookList} = this.props;
        console.log('===>', bookList);
        return (
            <div>
                <div>{"Test"}</div>
                {/* {bookList.map((book) => {
                    return (
                        <div>  
                            <div>book.book_name</div>
                            <hr />
                        </div>
                    )
                })} */}
                <div>
                    <div>{bookList.book_name}</div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
