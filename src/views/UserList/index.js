import React from 'react';
import { connect } from 'react-redux';
import getUserListAction from '../../actions/getUserListAction';

import { Table } from 'antd';

class UserList extends React.Component {
  componentDidMount() {
    const { getUserList } = this.props;
    getUserList && getUserList();
  }

  renderLoadingMessage = () => {
    const { userList } = this.props;
    return userList.loading;
  };

  renderUserList = () => {
    const { userList } = this.props;

    const columns = [
      {
        title: '用户编号',
        dataIndex: 'ID',
      },
      {
        title: '姓名',
        dataIndex: 'username',
      },
      {
        title: 'Email',
        dataIndex: 'email',
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
          dataSource={userList.userListArray || []}
          loading={userList.loading}
        />
      </div>
    );
  };

  render() {
    return <div>{this.renderUserList()}</div>;
  }
}

const mapStateToProps = (state) => ({
  userList: state.userList,
});

const mapDispatchToProps = (dispatch) => ({
  getUserList: () => getUserListAction()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
