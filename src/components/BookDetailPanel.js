import React from "react";

export default class BookDetailPanel extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <p>ID: {message.ID}</p>
        <p>Name: {message.book_name}</p>
        <p>Author: {message.author}</p>
        <p>ISBN: {message.isbn}</p>
        <p>press: {message.press}</p>
        <p>price: ￥{message.price}</p>
        <img src={message.image_url} alt="pic" />
        <p />
        <a href={message.douban_url}>More detail</a>
      </div>
    );
  }
}
