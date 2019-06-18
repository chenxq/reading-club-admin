import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Row, Col, Button } from 'antd';
import HomePage from './views/Home';

import './App.css';
import BookList from './views/BookList';
import AddBook from './views/AddBook';
import BookDetail from './views/BookDetail';
import UserListContainer from './views/UserList';
import Breadcrumbs from './views/Breadcrumbs';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <Row type="flex" justify="space-between" align="middle">
            <Col span={8}>
              <div className="logo">
                <span style={{ color: 'white', fontSize: 18 }}>
                  Reading Club
                </span>
              </div>
            </Col>
            <Col span={8}>
              <Row type="flex" justify="end" align="middle">
                <Button type="primary">
                  Login
                  <Icon type="login" />
                </Button>
                <div style={{ width: '20px' }} />>
                <Button type="link">Logout</Button>
              </Row>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['Book']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="Book"
                title={
                  <span>
                    <Icon type="book" />
                    Books
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link to="/home/booklist">Book List</Link>
                </Menu.Item>
                <Menu.Item key="2">Borrowed Books</Menu.Item>
                <Menu.Item key="3">Unborrowed Books</Menu.Item>
              </SubMenu>
              <SubMenu
                key="User"
                title={
                  <span>
                    <Icon type="user" />
                    Users
                  </span>
                }
              >
                <Menu.Item key="5">
                  <Link to="/home/userlist">User List</Link>
                </Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="Settings"
                title={
                  <span>
                    <Icon type="setting" />
                    Settings
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumbs />
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 600,
              }}
            >
              <Route exact path="/home" component={HomePage} />
              <Route path="/home/booklist" component={BookList} />
              <Route path="/home/addBook" component={AddBook} />
              <Route path="/home/booklist/detail" component={BookDetail} />
              <Route path="/home/userlist" component={UserListContainer} />
              <Route
                path="/home/userlist/detail"
                component={UserListContainer}
              />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
