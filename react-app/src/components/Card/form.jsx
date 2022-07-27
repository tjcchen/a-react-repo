/**
 * Forms
 * - Form tags
 *   <form>, <label>, <input>, <button type="submit">
 * - onChange
 * - onSubmit
 *   e.preventDefault
 */

export default function Form() {
  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>
      <form action="">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <input type="text" id="body" />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>
    </>
  );
}
