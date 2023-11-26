import { useState } from 'react';
import useToggle from './useToggle';
// custom hooks are great for abstracting some personalty
// lets setup a pretty simple hook ----> lets create a file in the starter (ueState.js)

const ToggleExample = () => {
  // const [show, setShow] = useState(false);  
  // we will cut this one out and put it in the useState.js

const {show, Toggle } = useToggle(true);


  return (
    
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={Toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
