import { getToken } from '@/utils/token';
import { createContext, useMemo } from 'react';

const AuthContext = createContext();

function AuthProvider({ children, value }) {
  const data = useMemo(() => getToken(), []);

  return (
    <AuthContext.Provider
      value={{
        type: data?.type,
        token: data?.token,
        isLogin: !!data?.token,
        currentUser: value?.currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
