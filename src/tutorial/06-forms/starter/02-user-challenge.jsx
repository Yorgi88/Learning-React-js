import { useState } from "react";
import { data } from "../../../data";

// const UserChallenge = () => {
// //   const [name, setName] = useState('');
// //   const [users, setUsers] = useState(data);     //this means the default value for the users is the data import


// //   // next we setup our controlled input

// //   const HandleInputTag = (e) => {
// //     setName(e.target.value);

// //   }

// //   const HandelSubmitTag = (e) => {
// //     e.preventDefault();
// //     if (!name) return;
// //     const FakeId = Date.now();
// //     const NewUsers = {id: FakeId, name};
// //     const UpdatedUsers = [...users, NewUsers];
// //     setUsers(UpdatedUsers);
// //     setName('');   //for cleaning out the input
// //     // NOTE THAT IN A LARGE PROJECT, DONT USE DATE.NOW AS USED ABOVE

// //     // this helps use to add new users to the web simple project
   
// //   }

// //   // next lets try importing the data.js and create some features

// //   // const HandleButtonClick = () => {
// //   //   if (user.id !== id)   {
// //   //     setUsers(user)
// //   //   }
// //   // }


// //   // now everytime the user submits the form, essentially we wanna add a new user to our array


// //   // const RemoveUser = (id) => {
// //   //   const UpdatedUsers = users.filter((person)=> person.id !== id)
// //   //   setUsers(UpdatedUsers);
// //   // }


// //   function RemoveUser(id) {
// //     var UpdatedUsers = [];
// //     for (var i = 0; i < users.length; i++) {
// //       if (users[i].id !== id) {
// //         UpdatedUsers.push(users[i]);
// //       }
// //     }
// //     setUsers(UpdatedUsers);
// //   }
  




//   return (
//     <div>
//       <form className='form' onSubmit={HandelSubmitTag}>
//         <h4>Add User</h4>
//         <div className='form-row'>
//           <label htmlFor='name' className='form-label'>
//             name
//           </label>
//           <input type='text' className='form-input' id='name' value={name} onChange={HandleInputTag} />
//         </div>

//         <button type='submit' className='btn btn-block'>
//           submit
//         </button>
//       </form>
//       {/* render users below */}
//       <h2>Users: </h2>
//       {users.map((user)=>{
//         console.log(user);
//         return (
//           <div key={user.id}>
//             <h4>{user.name}</h4>
//             <button type="button" className="btn" onClick={()=> RemoveUser(user.id)}>remove user</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };


const UserChallenge =()=>{
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const HandleInputTag =(e)=>{
    setName(e.target.value);
  }

  const HandleSubmitTag =(e)=>{
    e.preventDefault();
    if (!name) {
      return;
    }
    const FakeId = Date.now();
    const NewUsers = {id: FakeId, name};
    const UpdatedUsers = [...users, NewUsers];
    setUsers(UpdatedUsers);

    // for cleaning out the input
    setName('');

  }


  
  // for the button
  function ButtonClick(id) {
    let UpdatedUsers = [];
    for (let i = 0; i < users.length; i++) {
      // const element = array[i];
      if (users[i].id !== id) {
        UpdatedUsers.push(users[i]);
      }
      
    }
    setUsers(UpdatedUsers);
    
  }

  const AddItem = () => {
    setUsers((prevItems)=> {
      return [...prevItems, users]
    })
  }



  return (
     <div>
      <form className='form' onSubmit={HandleSubmitTag}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={HandleInputTag}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>

      {/* This is where we add a feature to the project where we create the feature that can add the names inputted to the 
      web page and also another feature to remove or delete particular users from the page. */}

      <h2>Users: </h2>
        {users.map((user)=>{
          console.log(user);
          return (
              // <div key={user.id}>
              //   <ul>
              //     <li>{user.name}</li>
              //   </ul>
              // </div>
            <div key={user.id}>
              <h4>{user.name}</h4>
              <button type="button" className="btn" onClick={()=> ButtonClick(user.id)} >remove user</button>
            </div>
          );
        })}
    </div>
    
    
     
  );
}





export default UserChallenge;
