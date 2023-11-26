import avatar from '../../../assets/default-avatar.svg';
import React from "react";
export function Person({name, nickName, images}) {
  // const Img = images[0].small.url;
  
  const img = images?.[0]?.small?.url || avatar
  // to access the url in the data.js file 
  return (
       <div>
            <img src={img} alt={name} style={{width: '50px'}} />
            <h4>{name}</h4> 
            <p>Nickname:  { nickName ||'ShakeandBake'}</p>

       </div>
  );
}
  