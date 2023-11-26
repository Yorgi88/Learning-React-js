import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

    const Login = () => {
      // normally connect to db or api
      setUser({name: 'Vegan food truck'});
    }

    const LogOut = () => {
      // normally connect to db or api
      setUser(null);
    }

  return (
    <div>
      {user? (
      <div>
        <h4>Hello There, {user.name}</h4>
        <button className="btn" type="button" onClick={LogOut}>logout</button>
      </div>  
      ) : (
      <div>
        <h4>Please Login,</h4>
        <button className="btn" type="button" onClick={Login}>login</button>
      </div>  
      )}
    </div>
  );
};


// const UserChallenge = () => {
//   const [users, setUsers] = useState(null);
//   const LogIns = () => {
//     setUsers({name: 'Welcome User'})
//   }

//   const LogOut = () => {
//     setUsers(false)
//   }
//   return (
//     <div>
//       {users? (
//         <div>
//           <h4>Hi there, {users.name}</h4>
//           <button type="button" className="btn" onClick={LogOut}>LogOut</button>
//         </div>
//       ) : (
//       <div>
//         <h4>Please login</h4>
//         <button type="button" className="btn" onClick={LogIns}>Login</button>
//       </div>
//       ) }
//     </div>
//   );
// }

export default UserChallenge;
