import { Footer } from '@/components';
import { Outlet } from 'umi';
import './UserLayout.less';

export default function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
