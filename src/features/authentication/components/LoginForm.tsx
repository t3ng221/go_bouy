import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  FormTitle,
  FromLabel,
} from '@/features/authentication/styles/login-styles';
import { LoginFormValues } from '@/features/authentication/types/login';

import CustomButton from '@/components/Atoms/Button/CustomButton';

type FormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  loading: boolean;
  onFinish: (values: LoginFormValues) => void;
};

export const LoginForm = ({ loading, onFinish }: LoginFormProps) => {
  const navigate = useNavigate();

  const { t } = useTranslation('translation', {
    keyPrefix: 'features.authentication',
  });

  const [form] = Form.useForm<FormValues>();

  const handleNavigateToSignUp = () => {
    navigate('/signup');
  };
  const handleNavigateToHome = () => {
    navigate('/home');
  };

  return (
    <>
      <FormTitle>{t('please_sign_in')}</FormTitle>
      <Form
        form={form}
        name="login"
        initialValues={{
          email: 'john@mail.com',
          password: 'changeme',
        }}
        onFinish={handleNavigateToHome}
        size="large"
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: t('please_input_your_email') },
            { type: 'email', message: t('please_input_your_email') },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder={t('email')} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: t('please_input_your_password') }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder={t('password')}
          />
        </Form.Item>
        <Form.Item>
          <CustomButton
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            {t('log_in')}
          </CustomButton>
        </Form.Item>
        <Form.Item>
          <CustomButton type={'danger'} block>
            {t('forgot_password')}
          </CustomButton>
        </Form.Item>
        <FromLabel> Don't Have an account?</FromLabel>
        <Form.Item>
          <CustomButton
            onClick={handleNavigateToSignUp}
            type={'secondary'}
            block
          >
            {t('sign_up')}
          </CustomButton>
        </Form.Item>
      </Form>
    </>
  );
};
