
// import React, { useState } from 'react'
// import React from 'react';


import { useState, createContext, useContext} from 'react';
import NavLinks from './navLinks'
// import { NavbarContext } from '../final/context/Navbar';

// here we wanna set some values like state value, user and logout

// eslint-disable-next-line react-hooks/rules-of-hooks
// const [user, setUser] = useState({name:'bob'});


// const NavBar = () => {
//   const [user, setUser] = useState({name:'bob'});
//   const logout = () => {

//   // remember in react we can only pass props down
//   // so u see wat we did to navlinks
//   setUser(null);
// };
//   return (
//     <nav className='navbar'>
//         <h5>CONTEXT API</h5>
//         <NavLinks user={user} logout={logout}/>
//     </nav>
//   )
// }




// NEXT WE USE CONTEXT API TO PASS DOWN THE PROPS  THAN FOR US TO BE DOING IT THIS WAY
// createContext returns a provider componenent amd a consumer componenet 
// most cases only provider sha using useContext hook

export const NavBarContexts = createContext();
console.log(NavBarContexts);




// custom hook
export const useAppContext = () => useContext(NavBarContexts);




const NavBar = () => {
  // next we invoke createContext:
 
  // essentially  whatever you pass up there using the code, you'll have access to anywhere in the tree, dom tree

  const [user, setUser] = useState({name:'bob'});
  const logout = () => {

  // remember in react we can only pass props down
  // so u see wat we did to navlinks
  setUser(null);
};
  return (
    // <NavBarContext.Provider value={{user, logout }}/>
    <NavBarContexts.Provider value={{user, logout}}>
      <nav className='navbar'>
          <h5>CONTEXT API</h5>
          <NavLinks/>
      </nav>
    </NavBarContexts.Provider> 
    // <NavBarContext.Provider/>
  );
};

export default NavBar