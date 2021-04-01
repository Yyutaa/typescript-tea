/*
 * @Author: yuta
 * @Date: 2021-03-31 15:30:04
 * @LastEditTime: 2021-04-01 11:33:51
 * @LastEditors: yuta
 */
export interface Todo {
  id: string,
  user: string;
  time: string;
  content: string;
  isCompleted: boolean;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export const todoListData: Todo[] = [
  {
    id: '1',
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "666666666",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: '2',
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "23410977",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: '3',
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "25455350",
    time: "2020年3月2日 19:34",
    isCompleted: true
  },
  {
    id: '4',
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "23410976",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: '5',
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "58352313",
    time: "2020年3月2日 19:34",
    isCompleted: true
  }
]

export function getUserById(userId: string) {
  return userList.filter(user => user.id === userId)[0];
}

export const userList: User[] = [
  {
    id: "666666666",
    name: "图雀社区",
    avatar: "https://avatars0.githubusercontent.com/u/39240800?s=60&v=4"
  },
  {
    id: "23410977",
    name: "mRcfps",
    avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
  },
  {
    id: "25455350",
    name: "crxk",
    avatar: "https://avatars1.githubusercontent.com/u/25455350?s=96&v=4"
  },
  {
    id: "23410976",
    name: "pftom",
    avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
  },
  {
    id: "58352313",
    name: "holy",
    avatar: "https://avatars0.githubusercontent.com/u/58352313?s=96&v=4"
  }
]