import Post from "../components/Post"
import './AllPost.scss'
const AllPost = (props) => {
  return ( 
  <div className="all-post">
    <h1 className="allpostsh1">Mindful Balance</h1>
    <h2>The essence of mindfulness, balance, and the journey of managing mental health and wellness.</h2>
    {props.posts.map((post) => <Post post={post} key={post.id} />)}
  </div>
  )
}


export default AllPost