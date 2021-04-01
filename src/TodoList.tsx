/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: yuta
 * @Date: 2021-04-01 10:30:53
 * @LastEditTime: 2021-04-01 15:28:23
 * @LastEditors: yuta
 */
import React from "react";
import { List, Avatar, Dropdown, Menu } from "antd";
import { Todo, getUserById } from "./util/data";
import { DownOutlined } from "@ant-design/icons";
// import { ClickParam } from "antd/lib/menu";

export interface ActionProps {
  isComplete: boolean;
  onClick: (key: "complete" | "delete") => void;
}

function Action({ onClick }: ActionProps) {
  const handleActionClick = ({ key }: any) => {
    if (key === "complete") {
      onClick("complete");
    } else if (key === "delete") {
      onClick("delete");
    }
  };

  return (
    <Menu onClick={handleActionClick}>
      <Menu.Item key="complete">完成</Menu.Item>
      <Menu.Item key="delete">删除</Menu.Item>
    </Menu>
  );
}

interface TodoListProps {
  todoList: Todo[];
  onClick: (todoId: string, key: "complete" | "delete") => void;
}

function TodoList({ todoList, onClick }: TodoListProps) {
  const _renderItem = (item: Todo) => {
    const user = getUserById(item.user);

    return (
      <List.Item
        key={item.id}
        actions={[
          <Dropdown
            overlay={() => (
              <Action
                isComplete={item.isCompleted}
                onClick={(key: "complete" | "delete") => onClick(item.id, key)}
              />
            )}
          >
            <a key="list-loadmore-more">
              操作 <DownOutlined />
            </a>
          </Dropdown>,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={user.avatar} />}
          title={<a href="https://ant.design">{user.name}</a>}
          description={item.time}
        />
        <div
          style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
        >
          {item.content}
        </div>
      </List.Item>
    );
  };

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={todoList}
      renderItem={_renderItem}
    />
  );
}

export default TodoList;
