import { memo } from 'react';
import Item from './Person';


const List = ({ people , RemoveItem}) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} RemoveItem={RemoveItem} />;
      })}
      
    </div>
  );
};
export default memo(List);``
