import { data } from "../../../data";
import { useState } from "react";
// const UseStateArray = () => {
//   const [people, setPeople] = useState(data);
//   // now we're going to setup 2 functions, one for removing a particular item
//   // two for removing all items
//   const removeItem = (id) => {
//     // removing that one item whose id matches
//     console.log(id);
//     const newPeople = people.filter((person)=>person.id !== id);
//     setPeople(newPeople);
    
//   }
//   const clearAllItems = () => {
//     setPeople([])
//   }

//   return (
//     <div>
//       {people.map((person) => {
//         const {id,name} = person  //===> in data.js
//         // console.log(person);
//         return (
//           <div key={id}>
//             <h4>{name}</h4>
//             {/* we import the data from the data.js and use it here */}
//             <button type="button" style={{marginTop: '2rem'}} className="btn" onClick={()=> removeItem(id)}>remove</button>

//           </div>
//         )
//       })}
//       <button type="button" className="btn" style={{marginTop: '2rem'}} onClick={clearAllItems}>Clear All</button>
      
//     </div>
//   )
// };

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePeople = (id) => {
    const newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  }
  const clearAll = () => {
    setPeople([]);
  }

  // go into the javascript land using the curly braces
return (
  <div>
  {people.map((person) => {
    const {id, name} = person;
    console.log(person);
    return(
      <div key={id}>
        <h4>{name}</h4>
        <button type="button" className="btn" onClick={()=> removePeople(id)}>remove</button>

      </div>
    );


  })}
<button type="button" style={{marginTop: '2rem'}} className="btn" onClick={clearAll}>remove all</button>
</div>
);
};

export default UseStateArray;
