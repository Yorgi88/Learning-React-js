import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { data } from "../../../data";




const QuickTutorial = () => {
    const [name, setName] = useState('');
    const [items, setItems] = useState(data);


    const HandleChange = (e) => {
        setName(e.target.value);
        
        
    }

    const AddItems = () => {
        // e.preventDefault();
      
        
        const UniqueId = uuidv4();
        const NewId = {id: UniqueId, name}
        const UpdatedItems = [...items, NewId]
        setItems(UpdatedItems);
        // const UniqueId = uuidv4();
        // console.log(UniqueId);
        // return [...UniqueId, items]
        
        setName('')


        // setItems(UniqueId => {
        //     return (
        //         [...UniqueId, items]
        //     )
        // })
    }







    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do list app</h1>
            </div>

            <div className="form">
                <input type="text" value={name} onChange={HandleChange} />
                <button onClick={AddItems}>
                    <span>Add</span>
                </button>
            </div>

            <div>
                <ul>
                    {items.map((item) => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}
export default QuickTutorial

// LETS SEE IF THIS WORKS