import { useEffect } from "react";
import { useState } from "react";
import { getUserById } from "../service/firebase";

export interface User {
  userId: string,
  username: string,
  fullName: string,
  email: string,
  created: number,
};

export const useLoggedInUser = (uid: string | undefined) => {
  const [user, setUser] = useState<User | any>();

  useEffect(() => {
    async function getUserByUserId(uid: string) {
      const response = await getUserById(uid);
      setUser(response || {});
    }

    if (uid) {
      getUserByUserId(uid);
    }
  }, [uid]);

  return { user };
}