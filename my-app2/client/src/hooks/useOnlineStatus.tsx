import { useEffect, useState } from "react";
import axios from "axios";

export const useOnlineStatus = () => {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>();

  useEffect(() => {
    console.log("this is from useOnlineStatus");
    getUserFromCookie();
  }, []);

  const getUserFromCookie = async () => {
    try {
      const { data } = await axios.get("/api/users/get-user-by-cookie");
      if (data.userDB) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return [userLoggedIn];
};