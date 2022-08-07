/**
 * The useSearchParams hook is used to read and modify the query string in the URL for the current location.
 * Like React's own useState hook, useSearchParams returns an array of two values:
 * the current location's search params and a function that may be used to update them.
 */
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
      <button onClick={() => setSearchParams({})}>Clear Search Params</button>
    </>
  );
}
