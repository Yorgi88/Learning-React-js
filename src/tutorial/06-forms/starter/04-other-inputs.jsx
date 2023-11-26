import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('react');

  const HandleShipping =(e)=>{
    console.log(e.target.checked);
    setShipping(e.target.checked)
  }

  const HandleFrameWork =(e)=>{
    setFramework(e.target.value);
    // with this line of code we can change the select option now;
    
  }



  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type="checkbox" name='shipping' id='shipping' onChange={HandleShipping} />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select name="framework" id="framework" value={framework} onChange={HandleFrameWork}>

            {frameworks.map((framework)=>{
              return (
                <option key={framework} >
                  {framework}
                </option>
              );
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
