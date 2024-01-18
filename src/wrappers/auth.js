import useAuth from '@/hooks/auth';
import { Navigate, Outlet } from 'umi';

export default () => {
  const { isLogin } = useAuth();
  return isLogin ? <Outlet /> : <Navigate to="/user/login" />;
};
