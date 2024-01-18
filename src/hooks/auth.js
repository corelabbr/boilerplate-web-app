import { AuthContext } from '@/contexts/auth';
import { useContext } from 'react';

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Auth context should be used within AuthContextProvider');
  }
  return context;
}

export default useAuth;
