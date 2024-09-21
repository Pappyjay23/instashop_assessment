import { AppContextUse } from '@/context/appContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const {profileData} = AppContextUse()
  

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = Object.values(profileData).every((value) => value !== "")
      setIsAuthenticated(authStatus);

      if (!authStatus) {
        router.push('/get-started');
      }
    };

    checkAuth();
  }, [router]); 

  return { isAuthenticated };
}