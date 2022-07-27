/**
 * Forms
 * - Form tags
 *   <form>, <label>, <input>, <button type="submit">
 * - onChange
 * - onSubmit
 *   e.preventDefault
 */

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>
      <form action="">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={onChange} />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <input type="text" id="body" onChange={onChange} />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>
    </>
  );
}
