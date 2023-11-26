import React, { useState } from 'react'

const Item = ({items, onChecked}) => {
  // const [clicked, SetIsClicked] = useState(false);
const HandleClick = () => {
  // if (clicked) {
  //   SetIsClicked(false);
  // }else{
  //   SetIsClicked(true);
  // }
  // SetIsClicked ((prevValue) => {
  //   return (!prevValue)
  // })
}

  return (
    <div>
    <ul>
        {items.map((item) => {
            return (
               <div key={item.id} onClick={()=> onChecked(item.id)}>
                 <li>{item.name}</li>
               </div>
                // <Item text={item} key={id}/>
                // <li key={item.id} style={{textDecoration: clicked? 'line-through' : 'none'}} onClick={HandleClick}>{item.name}</li>
            )
        })}
    </ul>
</div>
  )
}

export default Item