import { SignUpForm } from '@/features/authentication/components/SignUpForm';
import {
  LoginCard,
  LoginWrapper,
} from '@/features/authentication/styles/login-styles';

const SignUp = () => {
  return (
    <LoginWrapper>
      <LoginCard>
        <SignUpForm />
      </LoginCard>
    </LoginWrapper>
  );
};

export default SignUp;
