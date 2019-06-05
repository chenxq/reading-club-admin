import React from "react";
import {connect} from 'react-redux';

class BookDetail extends React.Component {
  constructor() {
    super();

    // 原始state
    this.state = {
      color: 'red',
    };
  }

  componentWillReceiveProps(nextProps) {
    // 外部传值， 修改原始state
    if(nextProps.color !== this.state.color) {
      this.setState({
        color: nextProps.color
      });
    }
  }

  componentDidMount() {
    // http request
    const {getBookDetail} = this.props;
    getBookDetail && getBookDetail();
  }

  render() {
    return <div>book detail</div>;
  }
}

const mapStateToProps = (state) => ({
  bookDetail: state.bookDetail,
});

const mapDispatchToProps = (dispatch) => ({
  getBookDetail: (bookId) => getBookDetail(bookId)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
