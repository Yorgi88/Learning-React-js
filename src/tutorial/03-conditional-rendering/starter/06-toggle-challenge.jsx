import { useState } from "react";
const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  // const ToggleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false)
  //     return;
  //   }else{
  //     setShowAlert(true)
  //   }

  // };

  return (
    <div>
      <button className="btn" onClick={()=> setShowAlert(!showAlert)}>
        Toggle
      </button>
      {showAlert && <Alert/> }
      
    </div>
  );
};


const Alert = () => {
  return (
    <div className="alert alert-danger">
        Hello world
    </div>
  );
}

// we can make the toggle snippet code alot shorter



const ToggleChallenge= () => {
  const [toggles, setToggles] = useState(null);
    const Toggle = () => {
      if (toggles) {
        setToggles(false);
        return;
        
      }else{
        setToggles(true);
      }
    }
  return (
    <div>
      <button className="btn" type="button" onClick={Toggle}>Toggle</button>
     
      {toggles && <Alertit/>}
    </div>
  );
}


// const Alertit = () => {
//   return (
//     <div className="alert alert-danger">
//       Hello world
//     </div>
//   );
// }












export default ToggleChallenge;
