import React from 'react';
import { Modal } from 'antd';
import deleteBookAction from '../actions/deleteBookAction';

export default class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      bookID: props.bookID,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({ visible: nextProps.visible });
    }
  }

  render() {
    const { onOk, onCancel } = this.props;
    const { bookID, visible } = this.state;
    return (
      <Modal
        id={bookID}
        title="Modal"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        okText="确认"
        cancelText="取消"
      >
        <p>{`确定删除该书籍吗？${this.state.bookID}`}</p>
      </Modal>
    );
  }
}
