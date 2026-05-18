import { useState } from "react"
import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList"
import SearchBar from "./components/SearchBar"

function App() {

  const [projects, setProjects] = useState([
    { id: 1, title: "Weather App", description: "A simple weather app" },
    { id: 2, title: "Todo App", description: "A todo list app" },
    { id: 3, title: "Calculator", description: "A basic calculator" },
  ])

  const [search, setSearch] = useState("")

  function addProject(newProject) {
    setProjects([...projects, newProject])
  }

  function deleteProject(id) {
    const updated = projects.filter(function(project) {
      return project.id !== id
    })
    setProjects(updated)
  }

  const filteredProjects = projects.filter(function(project) {
    return project.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div style={{ padding: "30px" }}>
      <h1>Project Showcase</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <ProjectForm onAdd={addProject} projectCount={projects.length} />

      <hr />

      <ProjectList projects={filteredProjects} onDelete={deleteProject} />
    </div>
  )
}

export default App