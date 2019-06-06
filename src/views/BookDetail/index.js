import React from "react";
import { connect } from "react-redux";
import requesBookDetail from "../../actions/bookDetail";

import BookDetailPanel from "../../components/BookDetailPanel";
import MoreLink from "../../components/MoreLink";

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
    getBookDetail && getBookDetail(1);
    // const bookID=this.props;
    // getBookDetail && getBookDetail(bookID);
  }

  render() {
    const message = this.displayStatus();
    return (
      <div>
        {
          !message ? <div>Loading...</div> : <BookDetailPanel message={message} />
        }
        <MoreLink linkUrl={message.douban_url} />
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
