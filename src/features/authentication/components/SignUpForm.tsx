import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { FormTitle } from '@/features/authentication/styles/login-styles';

import CustomButton from '@/components/Atoms/Button/CustomButton';

type FormValues = {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
};

export const SignUpForm = () => {
  const navigate = useNavigate();

  const { t } = useTranslation('translation', {
    keyPrefix: 'features.authentication',
  });

  const [form] = Form.useForm<FormValues>();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <FormTitle>{t('authentication')}</FormTitle>
      <Form form={form} name="signup" size="large">
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
          name={'username'}
          rules={[{ required: true, message: t('please_input_your_username') }]}
        >
          <Input prefix={<UserOutlined />} placeholder={t('username')} />
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
        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: t('please_confirm_your_password') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('password_mismatch')));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder={t('confirm_password')}
          />
        </Form.Item>
        <Form.Item>
          <CustomButton type="primary" htmlType="submit" block>
            {t('sign_up')}
          </CustomButton>
        </Form.Item>
        Have an account?
        <Form.Item>
          <CustomButton onClick={navigateToLogin} type="secondary" block>
            {t('move_to_login')}
          </CustomButton>
        </Form.Item>
        `
      </Form>
    </>
  );
};
