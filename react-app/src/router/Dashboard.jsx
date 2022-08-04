import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const data = 54897;

  return (
    <>
      <p>Dashboard</p>
      <button onClick={() => navigate("/login", { replace: false, state: data })}>
        Go to login
      </button>
    </>
  );
}
