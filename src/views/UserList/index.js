import React from "react";
import { connect } from "react-redux";
import getUserList from "../../actions/userAction";

import { Table, Modal } from "antd";

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      visible: false
    };
  }

  componentDidMount() {
    const { getUserList } = this.props;
    getUserList && getUserList();
  }

  renderUserList = () => {
    const {
      userList: { userListArray }
    } = this.props;
    console.log("UserList: ", userListArray, " ", typeof userListArray);
    return userListArray;
  };

  render() {
    console.log("===>", this.props);
    const { title, visible } = this.state;

    const columns = [
      {
        title: "用户编号",
        dataIndex: "ID"
      },
      {
        title: "姓名",
        dataIndex: "Username"
      },
      {
        title: "Email",
        dataIndex: "Email"
      },
      {
        title: "操作"
      }
    ];

    return (
      <div>
        <Table columns={columns} dataSource={this.renderUserList()} />
        <Modal title={title} visible={visible} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title,
  visible: state.visible,
  userList: state.userList
});

const mapDispatchToProps = dispatch => ({
  getUserList: () => getUserList()(dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
