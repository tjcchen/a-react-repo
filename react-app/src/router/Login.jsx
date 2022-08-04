import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <>
      <p>Login</p>
      <p>{location.state}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}
