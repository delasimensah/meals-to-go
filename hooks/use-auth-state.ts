import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

import { useAuthStore } from "@/hooks/zustand/use-auth-store";
import { auth } from "@/lib/firebase/config";

export const useAuthState = () => {
  const { setUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);
};
