import { useState } from "react";


const Sayhi = () => {
    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');



    const HandleInput = (e) => {
        setName(e.target.value)
    }

    const HandleInputSurn = (e) => {
        setSurName(e.target.value)
    }

    
 




    return (
        <div>
        <form className='form'>
        <h3>Hello {name} {surname}</h3>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={HandleInput}/>

          <label htmlFor='name' className='form-label'>
            surname
          </label>
          <input type='text' className='form-input' id='name' value={surname} onChange={HandleInputSurn}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
        </div>
    )
}
export default Sayhi