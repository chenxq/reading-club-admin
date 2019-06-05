import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {

  render() {
    return (<div>Book List</div>);
  }
}

export default connect()(BookList);