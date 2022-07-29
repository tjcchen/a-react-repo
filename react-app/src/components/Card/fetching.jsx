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

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <p>Fetch GET Request</p>
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
