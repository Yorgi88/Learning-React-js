const Person = ({ name, RemoveItem, id}) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={()=> RemoveItem(id)}>remove</button>
    </div>
  );
};
export default Person;
