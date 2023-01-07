import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/auth/authSlice";

const data = { email: "riyad@gmail.com", password: "1234" };

export default function SignIn() {
  const dispatch = useDispatch();
  const logInHandle = (data) => {
    dispatch(logIn(data));
  };

  return (
    <div>
      SignIn
      <button onClick={() => logInHandle(data)}>Log In</button>
    </div>
  );
}
