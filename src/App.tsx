/*
 * @Author: yuta
 * @Date: 2021-03-31 14:15:03
 * @LastEditTime: 2021-04-01 16:40:40
 * @LastEditors: yuta
 */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { Button, Typography, Form, Tabs } from "antd";

import "./App.css";
import logo from "./logo.svg";
import TodoInput, { TodoValue } from "./TodoInput";
import TodoList from "./TodoList";
import { todoListData } from "./util/data";

const { Title } = Typography;
const { TabPane } = Tabs;

function App() {
  const callback = () => {};
  const ref = useRef(null);
  const [todoList, setTodoList] = useState(todoListData);

  const onFinish = (values: any) => {
    // console.log(values, "values");
    // 合并数组1
    const newTodoList = [...todoList, { ...values.todo, isCompleted: false }]
    // 合并数组2
    // const newTodo = { ...values.todo, isCompleted: false };
    // const newTodoList = todoList.concat(newTodo);
    setTodoList(newTodoList);
  };

  // const onChange = (value: TodoValue) => {
  //   console.log(value, "value");
  // };

  const onClick = (todoId: string, key: string) => {
    if (key === "complete") {
      const newTodoList = todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: true,
          };
        }
        return todo;
      });
      setTodoList(newTodoList);
    } else if (key === "delete") {
      const newTodoList = todoList.filter((todo) => todo.id !== todoId);
      setTodoList(newTodoList);
    }
  };

  const activeTodoList = todoList.filter((item) => !item.isCompleted);
  const completedTodoList = todoList.filter((item) => item.isCompleted);

  return (
    <div className="App" ref={ref}>
      <div className="container header">
        <img src={logo} alt="" />
        <Title level={3}>图雀社区：汇聚精彩的免费实战教程</Title>
      </div>

      <div className="container" style={{ marginBottom: 20 }}>
        <Form style={{ textAlign: "center" }} onFinish={onFinish}>
          <Form.Item name="todo">
            <TodoInput onChange={() => {}} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Commit
          </Button>
        </Form>
      </div>

      <div className="container">
        <Tabs onChange={callback} type="card">
          <TabPane tab="所有" key="1">
            <TodoList todoList={todoList} onClick={onClick} />
          </TabPane>
          <TabPane tab="进行中" key="2">
            <TodoList todoList={activeTodoList} onClick={onClick} />
          </TabPane>
          <TabPane tab="已完成" key="3">
            <TodoList todoList={completedTodoList} onClick={onClick} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
