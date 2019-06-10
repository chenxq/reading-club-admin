import React from 'react';
import { connect } from 'react-redux';
import getUserList from '../../actions/userAction';

import { Table } from 'antd';

class UserList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loading: props.response.loading,
      userList: props.response.userListArray,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: nextProps.response.loading,
      userList: nextProps.response.userListArray,
    });
  }
  componentDidMount() {
    const { getUserList } = this.props;
    getUserList && getUserList();
  }

  render() {
    const { loading, userList } = this.state;
    const columns = [
      {
        title: '用户编号',
        dataIndex: 'ID',
      },
      {
        title: '姓名',
        dataIndex: 'Username',
      },
      {
        title: 'Email',
        dataIndex: 'Email',
      },
      {
        title: '操作',
      },
    ];

    return (
      <div>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={userList}
          loading={loading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state.userresponse,
});

const mapDispatchToProps = (dispatch) => ({
  getUserList: () => getUserList()(dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
