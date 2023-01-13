import { useState } from "react";

export default function useToken() {
  const [token, setToken] = useState();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    console.log(userToken);
    return userToken?.token;
  };

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
