import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{
    setTimeout(()=>{
      // done fetching data
      setIsLoading(false)
    },3000)
  }, [])

  if (isLoading){
    return <h2>loading...</h2>;
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;

// Conditional rendering is just controlling what is displayed in the browser based on some condition
