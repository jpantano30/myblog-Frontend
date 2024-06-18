import { Link } from "react-router-dom"
import './Post.scss'

const Post = ({ post }) => {
  return (
    <div className="post">
      <Link to={`/post/${post.id}`}>
        <h1>{post.title} </h1>
      </Link>
    </div>
  )
}

export default Post