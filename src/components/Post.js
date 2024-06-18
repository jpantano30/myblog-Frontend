import { Link, useNavigate } from "react-router-dom"

const Post = ({ post, deletePost }) => {

  const navigate = useNavigate()

  const handleDelete = (event) => {
    event.preventDefault()
    deletePost(post.id)
    navigate('/')
  }

  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <h1>{post.title} </h1>
      </Link>
      <h2>{post.body}</h2>
      <form onSubmit={handleDelete}>
        <input type="submit" value='Delete Post' />
      </form>
    </div>
  )
}

export default Post