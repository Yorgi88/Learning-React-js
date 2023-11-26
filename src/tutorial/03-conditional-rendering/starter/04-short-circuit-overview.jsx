import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  // falsy
  const [name, setName] = useState('Susan');
  // truthy

  return (
    <div>
      <h4>falsy OR: {text || 'hello'}</h4>  
    
      <h4>falsy OR: {text && 'hello'}</h4>

      <h4>falsy OR: {text || 'hello'}</h4>

      <h4>falsy OR: {text && 'hello'}</h4>
      <h2>short circuit overview</h2>;
    </div>
  )
};
export default ShortCircuitOverview;
