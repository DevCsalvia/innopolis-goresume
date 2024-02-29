import React from "react";
import type { TableProps } from "antd";
import { Space, Table } from "antd";
import { useRequest } from "../../lib/hooks/useRequest";

interface DataType {
  key: string;
  email: string;
  name: string;
  job: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ФИО",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Должность",
    dataIndex: "job",
    key: "job",
  },
  {
    title: "Действия",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Download</a>
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
      dataSource={result?.resumes}
      loading={isLoading}
      className="border-4 border-gray-500 rounded-lg w-[1000px]"
    />
  );
};
