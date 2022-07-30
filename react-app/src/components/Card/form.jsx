/**
 * Forms
 * - Form tags
 *   <form>, <label>, <input>, <button type="submit">
 * - onChange
 * - onSubmit
 *   e.preventDefault
 *
 * Info
 * - guide: https://jsonplaceholder.typicode.com/guide/
 */

import axios from "axios";
import { useState } from "react";

const defaultFormData = {
  title: "",
  body: "",
  userId: 1,
};

export default function Form() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log(response);
      setSuccess(true);
    } catch (ex) {
      console.log("error", ex);
      setError(true);
    }

    setFormData(defaultFormData);
  };

  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>

      {error && <p>Ooops, could not upload post...</p>}
      {success && <p>Post upload has succeeded</p>}
    </>
  );
}
