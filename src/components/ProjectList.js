function ProjectList({ projects, onDelete }) {
  return (
    <div>
      <h2>My Projects</h2>

      {projects.length === 0 && (
        <p>No projects found.</p>
      )}

      {projects.map(function(project) {
        return (
          <div
            key={project.id}
            style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px", width: "400px" }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button
              onClick={function() { onDelete(project.id) }}
              style={{ padding: "5px 10px" }}
            >
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList