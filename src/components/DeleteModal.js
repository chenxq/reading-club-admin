import React from "react";
import { Modal } from 'antd';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      bookID: 0,
    };
    console.log('init visible state: ', this.state.visible, 'id: ', this.state.bookID);
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  deleteBook = () => {
    this.setState({
      visible: false,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log('!!!!!!!render delete modal');
    return (
      <Modal
        id={this.state.bookID}
        title="Modal"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        okText="确认"
        cancelText="取消"
      >
        <p>确定删除该书籍吗？`${this.state.bookId}`</p>
      </Modal>
    );
  };
}

export default DeleteModal;
// export default connect(mapStateToProps)(DeleteModal);
