import React from 'react';
import { List } from 'antd';

export default function BookListItem(item) {
  return <List.Item
    bordered="true"
    extra={
      <img
        height={100}
        alt="logo"
        src={item.image_url}
      />}
  >
    <List.Item.Meta
      title={<a href="https://book.douban.com/subject/1102259/">{item.book_name}</a>}
      description={"Author: " + item.author}
    // {item.description}
    />
  </List.Item>
}
