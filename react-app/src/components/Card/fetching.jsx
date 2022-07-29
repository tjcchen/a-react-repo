/**
 * Data Fetching - Get Data
 * - Using Axios
 * - GET
 * - useEffect
 * - key attribute( when use .map )
 * - loading state
 * - error state
 *
 * Info
 * - React Query( https://github.com/TanStack/query )
 * - Axios( https://github.com/axios/axios )
 * - Mock API( https://jsonplaceholder.typicode.com/ )
 */

import axios from "axios";
import { useEffect, useState } from "react";

export default function Fetching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /**
   * [Explain] useEffect hook will be invoked whenever there the component is rendered,
   * if we don't pass an empty array as second parameter, this hook will be invoking all the time.
   * 
   * Note: an empty array means we only do that on the first time
   * 
   */
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setData(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.log(error);

        setError(true);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <p>Fetch GET Request</p>
      <p>{loading && "Loading..."}</p>
      <p>{error && "Ooops, could not fetch posts, please try again later"}</p>
      {data &&
        data.map((post) => {
          const { id, title, body } = post;

          return (
            <article key={id}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
            </article>
          );
        })}
    </>
  );
}
