import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const history = useNavigate();

  console.log(history);

  return (
    <>
      <p>Login</p>
    </>
  );
}