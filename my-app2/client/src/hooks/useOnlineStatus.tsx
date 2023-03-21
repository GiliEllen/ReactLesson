import { useEffect, useState } from "react";
import axios from "axios";

export async function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(false);

  const handleOnline = () => {
    setIsOnline(true);
  };
  const handleOfline = () => {
    setIsOnline(false);
    
  };
      
  const checkConnection = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5555/api/users/get-user-by-cookie"
      );
      if (data.userDB) {
        handleOnline();
      } else {
        handleOfline();
      }
    } catch (err: any) {
      if (!isOnline) handleOfline();
    }
  };

  useEffect(() => {

    checkConnection()
  }, []);

  return { isOnline, handleOnline, handleOfline };
}
