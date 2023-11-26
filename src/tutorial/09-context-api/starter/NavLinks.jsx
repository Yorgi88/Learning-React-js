
import UserContainer from './UserContainer'

// const NavLinks = ({user, logout}) => {
//   return (
//     // lets pass these limks props to usercontainer called prop drilling
//     <div className='nav-container'>
//       <ul className='nav-links'>
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">About</a>
//         </li>
//       </ul>

//       <UserContainer user={user} logout={logout}/>
      
//     </div>
//   )
// }






// NEXT WE USE CONTEXT API TO PASS DOWN THE PROPS  THAN FOR US TO BE DOING IT THIS WAY


const NavLinks = () => {
  return (
    // lets pass these limks props to usercontainer called prop drilling
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <UserContainer/>
      
    </div>
  )
}

export default NavLinks