/**
 * It is always recommended to use a Link tag from 'react-router-dom' rather than <a href=""></a> link
 */
import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const data = 54897;
  const profession = 'software engineer';

  return (
    <>
      <p>Dashboard</p>
      <button
        onClick={() => navigate("/login", { replace: false, state: data })}
      >
        Go to login
      </button>

      <Link to="/login">Go to login with Link</Link>

      <p>
        <button onClick={() => navigate("/tweet/" + data)}>Go to Tweet</button>
      </p>

      <p>
        <button onClick={() => navigate(`/about?id=${data}&profession=${profession}`)}>Go to About</button>
      </p>
    </>
  );
}
