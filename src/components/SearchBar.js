function SearchBar({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={function(e) { setSearch(e.target.value) }}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />
    </div>
  )
}

export default SearchBar