import './App.scss'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AllPost from './pages/AllPost'
import SinglePost from './pages/SinglePost'
import Form from './pages/Form'
import NavBar from './components/Navbar'


// const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:8000'
const apiURL = 'http://localhost:8000'

function App() {
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getBlogPosts = async () => {
    const response = await fetch(apiURL + '/blogs/')
    const data = await response.json()
    console.log(data)
    setPosts(data)
  }


  const handleFormSubmission = async (data, type) => {
    if(type === 'new'){
      await fetch(`${apiURL}/blogs/`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      getBlogPosts()
    } else {
      await fetch (`${apiURL}/blogs/${data.id}/`,{
        method: 'put',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      getBlogPosts()
    }
  }

  const deletePost = async (id) => {
    await fetch(`${apiURL}/blogs/${id}/`, {
      method: 'delete',
    })
    getBlogPosts()
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  )


  useEffect(() => {
    getBlogPosts()
  }, [])

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} />
      <Routes> 
        <Route exact path="/" element={<AllPost posts={filteredPosts} deletePost={deletePost} />} />

        <Route exact path="/post/:id" element={<SinglePost posts={posts} deletePost={deletePost}/>} />

        <Route exact path="/new" element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Add Blog Post' formType='new' />} />

        <Route exact path="/edit/:id" element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel="Edit Blog Post" formType='edit'/>} />
      </Routes>
    </div>
  )
}

export default App
