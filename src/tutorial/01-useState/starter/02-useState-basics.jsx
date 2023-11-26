import { useState } from "react";
// const UseStateBasics = () => {
//   // console.log(useState(2));
//   // const value = useState('hello')[0]
//   // const func = useState('hel')[1]
//   // console.log(value);
//   // console.log(func)
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count+1)
//     // note that useState is used for re-rendering 
//     // in the code we setting the count value as a default 0 using the usestate(0)
//   }

//   return (
//     <div>
//       <h4>You clicked {count} times</h4>
//       <button type="button" className="btn" onClick={handleClick}>click me</button>
//       <h2>useState basics</h2>
//     </div>
//   );
// };

const UseStateBasics = () => {
const [count, setCount] = useState(0);
const increaseCount = () => {
  setCount(count+1);
}


  return(
    <div>
      <h3>You clicked {count} times</h3>
      <button type="button" className="btn" style={{marginTop: '2rem'}} onClick={increaseCount}>click me</button>
    </div>
  );
}

export default UseStateBasics;
