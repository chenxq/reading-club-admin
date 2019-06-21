import React from "react";
import { Modal } from 'antd';
import { connect } from 'react-redux';
import deleteBookAction from '../actions/deleteBookAction';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      bookID: props.bookID,
    };
    console.log('init visible state: ', this.state.visible, 'id: ', this.state.bookID);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({ visible: nextProps.visible });
    }
  }

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
    // this.setState({ bookID: props.bookID, visible: props.visible });
    // const { bookID, visible } = this.props;
    // this.setState({ visible: visible });
    console.log('visible: ', this.state.visible);
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
        <p>确定删除该书籍吗？`${this.state.bookID}`</p>
      </Modal>
    );
  };
}

const mapStateToProps = (state) => ({
  bookID: state.bookID,
  visible: state.visible
});

const mapDispatchToProps = (dispatch) => ({
  deleteBook: (bookID) => deleteBookAction(bookID)(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteModal);
// export default DeleteModal;
// export default connect(mapStateToProps)(DeleteModal);
