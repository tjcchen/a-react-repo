/**
 * Forms
 * - Form tags
 *   <form>, <label>, <input>, <button type="submit">
 * - onChange
 * - onSubmit
 *   e.preventDefault
 */

import { useState } from "react";

const defaultFormData = {
  title: "",
  body: "",
};

export default function Form() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
    </>
  );
}
