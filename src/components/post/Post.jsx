import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/people/1.jpg" alt="" className="postProfileImg" />
                    <span className="postUsername">Saiyana Sa</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! How are You ?</span>
                <img src="assets/posts/1.jpg" className="postImg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" alt="" />
                    <img className="likeIcon" src="assets/heart.png" alt="" />
                    <div className="postLikeCounter">22 people liked</div>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">9 comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}
