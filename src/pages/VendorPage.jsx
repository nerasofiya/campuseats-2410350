import { Link, useParams, useSearchParams } from "react-router-dom";
import { useVendors } from "../hooks/useVendors.js";
import MenuList from "../components/MenuList.jsx";
import { Loading, ErrorMessage } from "../components/Status.jsx";
import MenuSearch from "../components/MenuSearch.jsx";

function VendorPage() {
  const { id } = useParams(); //Extracts the vendor id from the URL route
  const [searchParams] = useSearchParams(); //Gets the query string parameters from the URL along with a function to update them
  const searchTerm = searchParams.get("q") || "";

  const { vendors, loading, error, reload } = useVendors();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  const vendor = vendors.find((v) => String(id).startsWith(String(v.id)));

  if (!vendor) {
    return (
      <section>
        <h2 className="section-title">Vendor not found</h2>
        <p className="muted">
          There is no vendor called “{id}”. <Link to="/">Back to vendors</Link>
        </p>
      </section>
    );
  }

  const filteredMenu = (vendor.menu || []).filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section>
      <p>
        <Link to="/">← All vendors</Link>
      </p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">
        {vendor.location} · {vendor.openHours}
      </p>
      <MenuSearch />

      <MenuList items={filteredMenu} />
    </section>
  );
}

export default VendorPage;
