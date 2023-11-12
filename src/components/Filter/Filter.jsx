const Filter = ({ handleFilter, filter }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        onChange={handleFilter}
        value={filter}
        placeholder="Search contacts..."
      ></input>
    </div>
  );
};
export default Filter;
