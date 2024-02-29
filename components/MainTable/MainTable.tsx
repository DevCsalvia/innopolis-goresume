import React from "react";
import type { TableProps } from "antd";
import { Space, Table, Tag } from "antd";
import { useRequest } from "../../lib/hooks/useRequest";

interface DataType {
  key: string;
  name: string;
  job: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ФИО",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Должность",
    dataIndex: "job",
    key: "job",
  },
  {
    title: "Навыки",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Действия",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

//
export const MainTable = () => {
  const { data: result, isLoading } = useRequest("/Resume?size=20&page=1");

  return (
    <Table
      columns={columns}
      dataSource={result}
      loading={isLoading}
      className="border-4 border-gray-500 rounded-lg w-[1000px]"
    />
  );
};
