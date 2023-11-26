const Person = ({ name , RemoveItem, id}) => {
  return (
    <div>
      <h4>{name}</h4>
      <h3>gfrgrgrg</h3>
      <button onClick={()=> RemoveItem(id)}>Remove</button>
    </div>
  );
};
export default Person;
