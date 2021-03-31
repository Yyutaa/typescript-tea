/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import {
  List,
  Avatar,
  Button,
  Typography,
  Form,
  Input,
  Select,
  DatePicker,
  Menu,
  Dropdown,
  Tabs
} from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./App.css";
import logo from "./logo.svg";
import TodoInput, { TodoValue } from './TodoInput';
import { todoListData } from "./util/data"

const { Title } = Typography;
const { TabPane } = Tabs;

const menu = (
  <Menu>
    <Menu.Item>完成</Menu.Item>
    <Menu.Item>删除</Menu.Item>
  </Menu>
);

function TodoList() {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={todoListData}
      renderItem={item => (
        <List.Item
          actions={[
            <Dropdown overlay={menu}>
              <a key="list-loadmore-more">
                操作 <DownOutlined />
              </a>
            </Dropdown>
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">{item.user}</a>}
            description={item.time}
          />
          <div>{item.content}</div>
        </List.Item>
      )}
    />
  );
}

function App() {
  const callback = () => {};
  const ref = useRef(null);

  const onFinish = (values: TodoValue) => {
    console.log(values, 'values');
  }

  const onChange = (value: TodoValue) => {
    console.log(value, 'value');
  }

  return (
    <div className="App" ref={ref}>
      <div className="container header">
        <img src={logo} alt="" />
        <Title level={3}>图雀社区：汇聚精彩的免费实战教程</Title>
      </div>

      <div className="container" style={{marginBottom: 20}}>
        <Form style={{textAlign: 'center'}} onFinish={onFinish}>
          <Form.Item name="todo">
            <TodoInput onChange={onChange} />
          </Form.Item>

          <Button type="primary" htmlType="submit">Commit</Button>
        </Form>
      </div>

      <div className="container">
        <Tabs onChange={callback} type="card">
          <TabPane tab="所有" key="1">
            <TodoList />
          </TabPane>
          <TabPane tab="进行中" key="2">
            <TodoList />
          </TabPane>
          <TabPane tab="已完成" key="3">
            <TodoList />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
