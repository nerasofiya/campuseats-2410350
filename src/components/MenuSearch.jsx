import { useSearchParams } from "react-router-dom";

function MenuSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("q") || "";

  const handleSearchChange = (e) => {
    const value = e.target.value;

    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search menu items..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="input"
      />
    </div>
  );
}

export default MenuSearch;
