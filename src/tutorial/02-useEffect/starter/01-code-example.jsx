import { useState, useEffect } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('hello there');
    // careful, you can have infinite loop
  };
  sayHello()

  useEffect(()=> {
    console.log('hello from useEffect');

    const someFunc = async() => {
      await fetch()
    }
    someFunc()
  }, [])
  // note that useEffect takes in two args, first: callback func that will be invoked
  // second: dependency array

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
