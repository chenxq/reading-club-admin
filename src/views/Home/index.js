import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        Home Page
        <Button type="primary">Login</Button>
      </div>
    );
  }
}

export default connect()(HomePage);
