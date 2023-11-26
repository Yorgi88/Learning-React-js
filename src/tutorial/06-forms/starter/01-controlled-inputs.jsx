import { useState } from "react";

const ControlledInputs = () => {
  // lets create state values for the html/css template below
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const HandleChange = (e) => {
    // for the input section, we have to set an event for it
    // for forms, we use onChange event

    // console.log(e.target.name);
    // console.log(e.target.value);
    setName(e.target.value);
  }

  const HandleEmail = (e) => {
    setEmail(e.target.value);
    // we have made both components controlled inputs
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(name, email);
  }




  
  return <form className="form" onSubmit={HandleSubmit}> 
    <h4>Controlled inputs</h4>
    <div className="form-row">
      <label htmlFor="name" className="form-label">name</label>
      <input type="text" name="" id="name"  className="form-input" value={name} onChange={HandleChange}/>
    </div>

    <div className="form-row">
      <label htmlFor="name" className="form-label">Email</label>
      <input type="email" name="" id="email"  className="form-input" value = {email} onChange={HandleEmail} />
    </div>
    <button type="submit" className="btn"> 
      Submit
    </button>
  </form>
};
export default ControlledInputs;
