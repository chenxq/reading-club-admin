import React from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';

export default class BookDetailPanel extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <Row>
          <Col span={24} push={0}>
            <div>
              <Card
                title={message.name}
                bordered={false}
                // style={{ width: 350, display: 'inline-block' }}
              >
                <div
                  style={{
                    width: 350,
                    display: 'inline-block',
                    verticalAlign: 'top',
                  }}
                >
                  <img
                    src={message.imageUrl}
                    alt="pic"
                    style={{ width: 280, height: 350, verticalAlign: 'top' }}
                  />
                </div>
                <div style={{ display: 'inline-block' }}>
                  <p />
                  <p>编号: {message.id}</p>
                  <p>书名: {message.name}</p>
                  <p>作者: {message.author}</p>
                  <p>ISBN: {message.ISBN}</p>
                  <p>出版社: {message.press}</p>
                  <p>价格: ￥{message.price}</p>
                  <p />
                  <Button type="primary">借阅</Button>
                </div>
              </Card>
              <p>内容简介</p>
              <p>{message.description}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
