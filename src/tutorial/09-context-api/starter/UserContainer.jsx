// import React from 'react'

import { useContext } from "react";
import {  NavBarContexts, useAppContext } from "./navBar";

// const UserContainer = ({user, logout}) => {
//   return (
//     <div className='user-container'>
//       {/* <p>Hello there {user?.name?.toUpperCase()}</p> 
//       {/* wen we logout it shows hello there not hello there bob */}
//       {/* <button className='btn' onClick={logout}>logout</button> */} 

//       {/* LASTLY WE SETUP THE CONDITIONAL RENDERING WHERE IF USER EXISTS THEN PROVIDE A PARAGRAPH AND 
//       BUTTON , IF NOT SAY "PLS LOGIN" */}
//       {user? (
//         <>
//         <p>Hello there {user?.name?.toUpperCase()}</p> 
//         <button className="btn" type="button" onClick={logout}>Logout</button>
//         </> 
//       ) : (
//         <>
//         <p>Please Login</p> 
//         </> 
//       )}
     
     

    
//     </div>
//   )
// }






// NEXT WE USE CONTEXT API TO PASS DOWN THE PROPS  THAN FOR US TO BE DOING IT THIS WAY







const UserContainer = () => {
const {user, logout} = useAppContext();
// console.log(values);
// this is a special hook thats lookinf=g for that context comp that we crated in navbar.jsx

  // return 'Hello world';


  return (
    <div className='user-container'>
      {/* <p>Hello there {user?.name?.toUpperCase()}</p> 
      {/* wen we logout it shows hello there not hello there bob */}
      {/* <button className='btn' onClick={logout}>logout</button> */} 

      {/* LASTLY WE SETUP THE CONDITIONAL RENDERING WHERE IF USER EXISTS THEN PROVIDE A PARAGRAPH AND 
      BUTTON , IF NOT SAY "PLS LOGIN" */}
      {user? (
        <>
        <p>Hello there {user?.name?.toUpperCase()}</p> 
        <button className="btn" type="button" onClick={logout}>Logout</button>
        </> 
      ) : (
        <>
        <p>Please Login</p> 
        </> 
      )}
     
     

    
    </div>
  )
}


export default UserContainer