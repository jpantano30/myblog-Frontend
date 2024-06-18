import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import './SinglePost.scss'


const SinglePost = ({ posts, deletePost }) => {
  const navigate = useNavigate()
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [currentPost, setCurrentPost] = useState(null)

  useEffect(() => {
    const foundPost = posts.find(post => post.id === parseInt(params.id))
    if (foundPost) {
      setCurrentPost(foundPost)
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [params.id, posts])

   // const currentPost = useMemo(() => posts.find(post => post.id === parseInt(params.id)), [params.id, posts])

  const handleDelete = (event) => {
    event.preventDefault()
    deletePost(currentPost.id)
    navigate('/')
  }

  if (loading) {
    return <div>Loading...</div>
  }
  if (!currentPost) {
    return <div>Post not found</div>
  }

  return (
    <div className="single-post">
      <h1>{currentPost.title}</h1>
      <h2>{currentPost.body}</h2>
      <div className="button-group">
        <Link to={`/edit/${params.id}`}>
          <button className="edit-button">Edit Blog Post</button>
        </Link>
        <form onSubmit={handleDelete} className="delete-form">
          <input type="submit" value='Delete Post' className="delete-button" />
        </form>
      </div>
    </div>
  )
}

export default SinglePost
