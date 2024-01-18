// @ts-nocheck
import { hasPermissionFeatures } from '@/utils/features';

/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  // const { features } = currentUser || {} ;
  return {
    canSuperAdmin: currentUser && currentUser.is_system_admin,
    canFeatures: (element: { features: any }) =>
      (element?.features && hasPermissionFeatures(element?.features)) || true,
  };
}
