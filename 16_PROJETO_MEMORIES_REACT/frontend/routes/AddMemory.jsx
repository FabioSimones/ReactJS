import axios from "../axios-config"
import { useState } from "react"
import "./AddMemory.css"
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom"



function AddMemory() {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({})
  const [img, setImg] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(inputs, img)

    const formData = new FormData()
    formData.append("image", img)
    formData.append("title", inputs.title)
    formData.append("description", inputs.description)

    try {
      const response = await axios.post("/memories", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      toast.success(response.data.msg)
      navigate("/")
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
    }
  }

  const handleChange = (event) => {
    if(event.target.name === "img"){
      setImg(event.target.files[0])
    }else{
      setInputs({...inputs, [event.target.name]: event.target.value})
    }
  }
  return (
    <div className="add-memory-page">
        <h2>Crie novas memórias</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Título</p>
            <input type="text" placeholder="Informe o título" name="title"onChange={handleChange}/>
          </label>
          <label>
            <p>Descrição</p>
            <textarea placeholder="Informe o que aconteceu..." name="description"onChange={handleChange}></textarea>
          </label>
          <label>
            <p>Foto:</p>
            <input type="file" name="img"onChange={handleChange}/>
          </label>
          <input type="submit" className="btn" value="Enviar"/>
        </form>
    </div>
  )
}

export default AddMemory