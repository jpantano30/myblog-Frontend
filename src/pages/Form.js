import { useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
const Form = (props) => {
  const navigate = useNavigate()
  const params = useParams()


  const currentPost = useMemo(() => props.posts.find(post => post.id === parseInt(params.id)), [params.id, props.posts])


  const [formData, setFormData] = useState(
    props.formType === 'new' ? {
      title: '',
      body: '',
    } : {
      title: currentPost.title,
      body: currentPost.body,
      id: parseInt(currentPost.id)
    }
  )

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const handlesubmission = (event) => {
    event.preventDefault()
    props.handleSubmit(formData, props.formType)
    navigate('/')
  }

  return (
    <form onSubmit={handlesubmission}>
      <h3>title</h3>
      <input 
        type='text'
        onChange={handleChange}
        value={formData.title}
        name='title'
      />
      <h3>body</h3>
      <input 
        type='text'
        onChange={handleChange}
        value={formData.body}
        name='body'
      />
      <input 
        type='submit' vlaue={props.buttonLabel} />
        
    </form>
  )
}

export default Form
