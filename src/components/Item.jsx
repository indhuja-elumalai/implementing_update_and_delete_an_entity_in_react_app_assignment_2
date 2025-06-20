const API_BASE = `http://${import.meta.env.VITE_API_URI}/doors`;

const Item = ({ item, setItems }) => {
  const handleDelete = () => {
    fetch(`${API_BASE}/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        return res.json();
      })
      .then(() => {
        // Remove deleted item from UI
        setItems((prev) => prev.filter((door) => door.id !== item.id));
      })
      .catch((err) => {
        console.error("Delete error:", err);
        alert("Failed to delete the door.");
      });
  };

  return (
    <div style={{ margin: "1rem", border: "1px solid gray", padding: "0.5rem" }}>
      <p>
        <strong>{item.name}</strong> ({item.material || "Material Unknown"})
      </p>
      <button onClick={handleDelete} style={{ background: "red", color: "white" }}>
        Delete
      </button>
    </div>
  );
};

export default Item;
