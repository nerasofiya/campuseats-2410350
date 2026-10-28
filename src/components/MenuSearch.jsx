// src/components/MenuSearch.jsx
function MenuSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search menu items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
      />
    </div>
  );
}

export default MenuSearch;
