import { useState } from "react"

function ProjectForm({ onAdd, projectCount }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit() {
    if (title === "" || description === "") {
      alert("Please fill in all fields")
      return
    }

    const newProject = {
      id: projectCount + 1,
      title: title,
      description: description,
    }

    onAdd(newProject)

    setTitle("")
    setDescription("")
  }

  return (
    <div>
      <h2>Add New Project</h2>

      <div>
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={function(e) { setTitle(e.target.value) }}
          style={{ padding: "6px", marginBottom: "10px", marginLeft: "5px" }}
        />
      </div>

      <div>
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={function(e) { setDescription(e.target.value) }}
          style={{ padding: "6px", marginBottom: "10px", marginLeft: "5px" }}
        />
      </div>

      <button onClick={handleSubmit} style={{ padding: "6px 14px" }}>
        Add
      </button>
    </div>
  )
}

export default ProjectForm