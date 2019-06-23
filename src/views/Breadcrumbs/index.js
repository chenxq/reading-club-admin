import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const breadcrumbNameMap = {
  '/home': 'Home',
  '/home/booklist': 'Book List',
  '/home/booklist/detail': 'Book Detail',
  '/home/booklist/addBook': 'Add Book',
  '/home/userlist': 'UserList',
  '/home/userlist/detail': 'User Detail',
  '/home/setings': 'Settings',
};

function Breadcrumbs(props) {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [].concat(extraBreadcrumbItems);
  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
}

export default withRouter(Breadcrumbs);
