import React from "react";
import { useSelector } from "react-redux";

export default function Home() {

    const auth = useSelector(state => state.auth)

  return (
    <div>
      Home
      <div>Email: {auth.user.email}</div>
    </div>
  );
}
