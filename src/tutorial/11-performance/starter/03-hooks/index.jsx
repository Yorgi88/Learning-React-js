import { useCallback, useState, useMemo } from 'react';
import { data } from '../../../../data';
import List from './List';
import SlowFunction from './slowFunction';

  // we will learn about useCallback which deals with memoization, literally means storing something so that it can
  // be accessed later without having to recompute it from scratch

  



const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);


const Value = useMemo (()=> SlowFunction() , [])     
console.log(Value);
// we notice that at the click of the count button, its really slow so we use useMemo






 const RemoveItem = useCallback( (id) => {
  const newPeople = people.filter((person) => person.id !== id);
  setPeople(newPeople)
 } , [people])

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} RemoveItem = {RemoveItem} />
    </section>
  );
};
export default LowerState;
