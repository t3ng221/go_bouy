import { Navigate } from 'react-router-dom';

const AuthRedirect = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return !isLoggedIn ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AuthRedirect;
