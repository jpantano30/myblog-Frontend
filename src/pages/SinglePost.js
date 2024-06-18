import { useMemo } from "react"
import { useParams, Link } from "react-router-dom"

const SinglePost = ({ posts }) => {
  const params = useParams()

  const currentPost = useMemo(() => posts.find(post => post.id === parseInt(params.id)), [params.id, posts])
  return (
    <div>
      <h1>{currentPost.title}</h1>
      <h2>{currentPost.body}</h2>
      <Link to={`/edit/${params.id}`}>
        <button>Edit Blog Post</button>
      </Link>
      <Link to={`/`}>
        <button>Go Back</button>
      </Link>
    </div>
  )
}

export default SinglePost
