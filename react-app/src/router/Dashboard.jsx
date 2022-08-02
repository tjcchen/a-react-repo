import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <p>Dashboard</p>
      <button onClick={() => navigate("/login", { replace: false })}>
        Go to login
      </button>
    </>
  );
}
