import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');   //note that this runs when the application load
  const ToggleFunc = () => {
    if (toggle) {
      setToggle(false);
      return;
    } else{
      setToggle(true)
    }
  }
  return (
    <div>
      <button className="btn" type="button" onClick = {ToggleFunc}>Toggle Component</button>
      {/* set it to the opposite value, whatever that means */}
      {toggle && <RandomComponent/>}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    
    // console.log('hhmmm thats interestiing');
       //appears in the source console not in the browser
    // const IntervalID = setInterval(() => {
    //   // console.log('Hello from interval');
    // }, 2000); 
    //   // we notice that the interval keeps running in the console, so what do we do?
    //   // we clean it by using a cleanup function

    //   return () => {
    //     clearInterval(IntervalID)
    //     // now we have cleaned it up

    //     console.log('cleanup');


      const SomeFunc = () => {
        // some logic
      }
      window.removeEventListener('scroll', SomeFunc)  ;
     
      return () =>  window.addEventListener('scroll', SomeFunc);
    //   }
  }, []);

  return (
    <h1>Hello there</h1>
  );
}

export default CleanupFunction;
