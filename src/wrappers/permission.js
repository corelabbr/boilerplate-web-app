import useAuth from '@/hooks/auth';
import { Navigate, Outlet, useSelectedRoutes } from 'umi';

export default (props) => {
  const { currentUser } = useAuth();
  const routes = useSelectedRoutes();

  const { currentAuthority } = currentUser || {};
  const [element] = routes.reverse();
  const { authority } = element?.route || {};

  return !authority || (authority.length > 0 && authority.includes(currentAuthority)) ? (
    <Outlet />
  ) : (
    <Navigate to="/user/login" />
  );
};
