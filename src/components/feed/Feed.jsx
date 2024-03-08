import "./feed.css"
import Share from "../../components/share/Share";
import Post from "../post/Post";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}
