import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";

export default function Post({post}) {
    
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} className="postImg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" alt="" />
                    <img className="likeIcon" src="assets/heart.png" alt="" />
                    <div className="postLikeCounter">{post.like} people liked</div>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}
