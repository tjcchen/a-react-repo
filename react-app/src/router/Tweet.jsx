import { useParams } from "react-router-dom";

export default function Tweet() {
  // grab https://location/tweet/{tweerId} from the url
  const { tweetId } = useParams();

  return (
    <>
      <p>Tweet</p>
      <p>The tweet ID is: {tweetId}</p>
    </>
  );
}
