/*
 * @Author: yuta
 * @Date: 2021-03-31 15:12:51
 * @LastEditTime: 2021-03-31 16:59:26
 * @LastEditors: yuta
 */
import React, { useState } from "react";
import { Input, Select, DatePicker } from "antd";
import { Moment } from "moment";
import { userList } from './util/data';

const { Option } = Select;

enum UserId {
  tuture = "666666666",
  mRcfps = "23410977",
  crxk = "25455350",
  pftom = "23410976",
  holy = "58352313"
}

export interface TodoValue {
  content?: string,
  user?: UserId,
  date?: string
}

interface TodoInputProps {
  value?: TodoValue,
  onChange?: (value: TodoValue) => void,
}

const TodoInput = ({ value = {}, onChange }: TodoInputProps) => {
  const [content, setContent] = useState('');
  const [user, setUser] = useState(UserId.tuture);
  const [date, setDate] = useState("");

  const triggerChange = (changeValue: TodoValue) => {
    if (onChange) {
      onChange({ content, user, date, ...value, ...changeValue });
    } 
  }

  const onContentChange = (e: any) => {
    setContent(e.target.value);

    triggerChange({ content: e.target.value })
  }

  const onUserChange = (selectValue: UserId) => {
    setUser(selectValue);

    triggerChange({ user: selectValue })
  }

  const onDateOk = (date: Moment) => {
    setDate(date.format('YYYY-MM-DD HH:mm'));

    triggerChange({ date: date.format("YYYY-MM-DD HH:mm") })
  }

  return (
    <div className="todoInput">
      <Input
        type="text" 
        placeholder="输入待办事项内容"
        value={value.content || content}
        onChange={onContentChange}
      />

      <Select
        style={{ width: 80 }}
        size="small"
        defaultValue={UserId.tuture}
        value={user}
        onChange={onUserChange}
      >
        {userList.map(user => (
          <Option key={user.name} value={user.id}>{user.name}</Option>
        ))}
      </Select>

      <DatePicker
        showTime
        size="small"
        style={{ marginLeft: "16px", marginRight: "16px" }}
        onOk={onDateOk}
      />
    </div>
  );
};

export default TodoInput;