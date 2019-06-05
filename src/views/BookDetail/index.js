import React from "react";
import { connect } from "react-redux";
import requesBookDetail from "../../actions/bookDetail";

class BookDetail extends React.Component {
  displayStatus = () => {
    const { res } = this.props;

    const { loading, msg, ret } = res;
    if (loading === "init") {
      return "init";
    } else if (loading === "done") {
      return ret.data.message;
    } else if (loading === "failure") {
      return `failed message: ${msg}`;
    } else {
      return "loading";
    }
  };

  // componentWillReceiveProps(nextProps) {
  //   // 外部传值， 修改原始state
  //   if(nextProps.color !== this.state.color) {
  //     this.setState({
  //       color: nextProps.color
  //     });
  //   }
  // }

  componentDidMount() {
    const { getBookDetail } = this.props;
    // getBookDetail && getBookDetail(1);
    const bookID=this.props;
    getBookDetail && getBookDetail(bookID);

  }

  render() {
    const message=this.displayStatus(); 
    return (
      <div>
        <p>ID: {message.ID}</p>
        <p>Name: {message.book_name}</p>
        <p>Author: {message.author}</p>
        <p>ISBN: {message.isbn}</p>
        <p>press: {message.press}</p> 
        <p>price: ￥{message.price}</p>  
        <img src={message.image_url} alt='pic'></img>
        <p></p>
        <a href={message.douban_url}>More detail</a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  res: state.bookDetail
});

const mapDispatchToProps = dispatch => ({
  // getBookDetail: (bookId) => getBookDetail(bookId)(dispatch),
  getBookDetail: bookID => requesBookDetail(bookID)(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
