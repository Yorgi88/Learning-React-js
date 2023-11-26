import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: '23',
    hobby: 'read books'
  })
  // const [name, setName] = useState('Peter');
  // const [age, setAge] = useState(23);
  // const [hobby, setHobby] = useState('read books');

  // THAN FOR US TO USE THE CODE ABOVE AND BE NAMING ITS PROPERTIES ONE BY ONE, WE CAN JUST GROUP IT ALL INTO AN OBJECT

  const displayPerson = () => {
    // setPerson({
    //   // name: 'John',
    //   // age: 29,
    //   // hobby: 'screams at the laptop'
    // })

    setPerson({...person, name:'susan'})
  }
  // const returnPerson = () => {
  //   name('Peter');
  //   age(23);
  //   hobby('read books')

  // }

  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3> Enjoys {person.hobby}</h3>
    <button type='button' className='btn' onClick={displayPerson}>Next?</button>
    {/* <button type='button' className='btn' onClick={returnPerson}>Previous</button> */}
    </>
  );

};

export default UseStateObject;
