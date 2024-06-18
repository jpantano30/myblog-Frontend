import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AllPost from './pages/AllPost'
import SinglePost from './pages/SinglePost'
import Form from './pages/Form'


const apiURL = process.env.API_URL

function App() {
  const [posts, setPosts] = useState([])

  const getBlogPosts = async () => {
    const response = await fetch(apiURL + '/blogs/')
    const data = await response.json()
    console.log(data)
    setPosts(data)
  }


  const handleFormSubmission = async (data, type) => {
    if(type === 'new'){
      // eslint-disable-next-line
      const response = await fetch(`${apiURL}/blogs/`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      getBlogPosts()
    } else {
      // eslint-disable-next-line
      const response = await fetch (`${apiURL}/blogs/${data.id}/`,{
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
    // eslint-disable-next-line
    const response = await fetch(`${apiURL}/blogs/${id}/`, {
      method: 'delete',
    })
    getBlogPosts()
  }

  useEffect(() => {
    getBlogPosts()
  }, [])

  return (
    <div className="App">
      <h1>My Blog Posts</h1>
      <Routes> 
        <Route exact path="/" element={<AllPost posts={posts} deletePost={deletePost} />} />

        <Route exact path="/post/:id" element={<SinglePost posts={posts}/>} />

        <Route exact path="/new" element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Add Blog Post' formType='new' />} />

        <Route exact path="/edit/:id" element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel="Edit Blog Post" formType='edit'/>} />
      </Routes>
    </div>
  )
}

export default App
