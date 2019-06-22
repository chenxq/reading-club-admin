import React from 'react';
import { Modal } from 'antd';

export default class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      bookInfo: undefined,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      const { visible, bookInfo } = nextProps;
      this.setState({ visible, bookInfo });
    }
  }

  render() {
    const { onOk, onCancel } = this.props;
    const { visible, bookInfo } = this.state;
    return (
      <Modal
        title="Modal"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        okText="确认"
        cancelText="取消"
      >
        <p>{`确定删除该书籍吗？${bookInfo && bookInfo.name}`}</p>
      </Modal>
    );
  }
}
