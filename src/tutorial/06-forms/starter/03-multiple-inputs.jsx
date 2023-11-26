import { useState } from "react";

const MultipleInputs = () => {

  // IN THIS PROJECT WE USINF DYNAMIC OBJECTS THAT IS, WE SETUP ONE STATE VALUE TO REPRESENT ALL OF THE INPUTS
  const [users, setUsers] = useState({
    name: '', 
    email:'',
     password:''
  })

  // THE BEAUTY HERE IS THAT WE CAN USE ONLY ONE FUNCTION SINCE WE HAVE ONLY ONE STATE VALUE  

  const HandleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setUsers({...users,[e.target.name]: e.target.value})   //
    // we want to dynamically update the property in the state and set it equals to value
  }

  const HandleSubmit =(e)=>{
    e.preventDefault();
    console.log(users);
  }






  return (
    <div>
      <form className='form' onSubmit={HandleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={users.name} onChange={HandleChange} name="name"/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' value={users.email} onChange={HandleChange} name="email"/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' value={users.password} onChange={HandleChange} name="password"/>
        </div>
        {/* set the "name" in the input tags to the specific value of each input */}

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
