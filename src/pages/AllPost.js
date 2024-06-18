import Post from "../components/Post"
import { Link } from "react-router-dom"
const AllPost = (props) => (
  <>
    <Link to={`/new`}>
      <button>Add a Blog Post</button>
    </Link>
    {props.posts.map((post) => <Post post={post} key={post.id} deletePost={props.deletePost} />)}
  </>
)


export default AllPost