import Item from "./Item";

const ItemList = ({ items, setItems }) => {
  return (
    <>
      <h2>List of Doors</h2>
      {items.length === 0 ? (
        <p>No doors available.</p>
      ) : (
        items.map((item) => (
          <Item key={item.id} item={item} setItems={setItems} />
        ))
      )}
    </>
  );
};

export default ItemList;
