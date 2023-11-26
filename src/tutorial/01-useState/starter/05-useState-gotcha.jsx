import { useState } from "react";
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);



  const handleClick = () => {
      // setValue((currentState)=>{
      //   const newState = currentState +1
      //   return newState;
      // })
      // console.log(value);
      // this springs up a bottleneck, it won't happen synchronously


      // setTimeout(()=>{
      //   console.log('click the button');
      //   setValue(value+1);
      // }, 3000)


      setTimeout(()=>{
        setValue((currentState)=>{
          return currentState + 1
          
          
        })
      })

  };
  return (
    <>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={handleClick}>Click to increase</button>

      <h2>useState "Gotcha"</h2>
    
    </>
  );
};

export default UseStateGotcha;
