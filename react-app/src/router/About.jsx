import React from "react";
import { useSearchParams } from "react-router-dom";

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchId = searchParams.get("id");
  const profession = searchParams.get("profession");

  return (
    <>
      <p>About Info</p>
      <p>id: {searchId}</p>
      <p>profession: {profession}</p>
    </>
  );
}
