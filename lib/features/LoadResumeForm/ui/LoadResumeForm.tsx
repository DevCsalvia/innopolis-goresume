import { Button, Form, Input } from "antd";
import { useConvertResumeMutation } from "@/lib/entity/resume";

type FieldType = {
  accessToken?: string;
  link?: string;
};

export const LoadResumeMutationFixedCacheKey =
  "LoadResumeMutationFixedCacheKey";

export const LoadResumeForm = () => {
  const [uploadResume, { isLoading }] = useConvertResumeMutation({
    fixedCacheKey: LoadResumeMutationFixedCacheKey,
  });

  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={uploadResume}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Введите Access Token"
        name="accessToken"
        rules={[
          { required: true, message: "Пожалуйста добавьте Access Token" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Введите ссылку на резюме"
        name="link"
        rules={[
          { required: true, message: "Пожалуйста добавьте ссылку на резюме" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          className="bg-blue-500"
          htmlType="submit"
          loading={isLoading}
        >
          Загрузить
        </Button>
      </Form.Item>
    </Form>
  );
};
