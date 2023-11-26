import React from 'react'
import { useState } from 'react'
import { data } from '../../../data'
import { v4 as uuidv4 } from 'uuid'
import Item from './item'

const AddUsersChallenge = () => {
    const [name, setName] = useState("")
    const [items, setItems] = useState([])

    const HandleSubmit = () => {
      const GiveId = uuidv4();
      const NewId = {id: GiveId, name}
 
      const UpdatedItems = [...items, NewId]
      setItems(UpdatedItems);

      

      setName('');
    }

    // const HandleInput = (e) => {
    //   setName(e.target.value)
    // }

    const HandleChange = (e) => {
      setName(e.target.value);
      
    }

    const AddItem = () => {
      setItems((prevItems)=> {
        return [...prevItems, items]
      })
    }

    const DeleteItem = (id) => {
      // console.log('item has been deleted');
      setItems((prevItems)=>{
        return (
          prevItems.filter((item)=>{
            return (
              item.id !== id
            )
          })
        )
      })

      // let UpdatedUsers = [];
      // for (let i = 0; i < items.length; i++) {
      //   // const element = array[i];
      //   if (items[i].id !== id) {
      //     UpdatedUsers.push(items[i]);
      //   }
        
      // }
      // setItems(UpdatedUsers);
      

    }

    // function AddItem(id) {
    //   let UpdatedUsers = [];
    //   // for (let i = 0; i < items.length; i++) {
    //   //   // const element = array[i];
    //   //   if (items[i].id !== id) {
    //   //     UpdatedUsers.push(items[i]);
    //   //   }
        
    //   // }
   
      
    // }
    
    

    
// IN THIS CASE WE JUST WANNA ADD A NEW LIST WEN WE CLICK ON THE ADD BUTTON LIKE IN A NOTES APP
// BUT I PUT THE HANDLESUBMIT IN THE ONCLICK, I DIDNT USE ONSUBMIT


  return (

    <div className="container">
    <div className="heading">
        <h1>To-Do list app</h1>
    </div>

    <div className="form">
        <input type="text" value={name} onChange={HandleChange}  className='form-input'/>
        <button onClick={HandleSubmit} className='btn'>
            <span>Add</span>
        </button>
    </div>

    {/* <div>
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.id}>{item.name}</li>
                    // <Item text={item} key={id}/>
                )
            })}
        </ul>
    </div> */}

      <Item items={items} onChecked={DeleteItem}/>

</div>





    // <div>
    //  <form className='form'>
    //     {/* <h4>Add User</h4> */}
    //     <div className='form-row'>
    //       <label htmlFor='name' className='form-label'>
    //         name
    //       </label>
    //       <input type='text' className='form-input' id='name' value={name} onChange={HandleChange}/>
    //     </div>

    //     <button type='submit' className='btn btn-block' onClick={HandleSubmit}>
    //       Add
    //     </button>
    //   </form>

    //   <div>
    //     <ul>
    //       {items.map((item)=>{
    //         return(
    //           // <li key={item.id}>{item}</li>
              
    //           <li key={item.id}>{item.name}</li>
    //         )
          
    //       })}
          
    //     </ul>
    //   </div>
    // </div>
  )
}

export default AddUsersChallenge