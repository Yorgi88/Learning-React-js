// import { useState } from "react";
// import { data, people } from "../data";
// import SetData from "./FirstComponent";

import { ReactDOM } from "react-dom";





const NoteBasics = () => {
    // const [humans, setHumans] = useState(data)
    // const [count, setCount] = useState(0)

    // const HandleClick = () => {
    //     setCount(count +1)
    // }

    // const ClearAll = () => {
    //     setHumans([])
    // }
    // const ResetAll = () => {
    //     setHumans(data)
    // }

    const Header = () => {
        // u will make this in a separate file and import it in our Keeper.jsx
        return (
            <header>
                <h1>
                    Keeper
                </h1>
            </header>
        )
    }


  


  return (

    <div>
        <Header/>
    </div>


    // <section>
    //     <h3>{count}</h3>
    //     <button type="button" className="btn" onClick={HandleClick}>click me</button>
    //     <SetData humans={humans}/>
    //     <button type="button" className="btn" onClick={ClearAll}>clear all</button>
    //     <button type="button" className="btn" onClick={ResetAll}>reset</button>
    //     {/* <article>
    //         <div>
    //         {humans.map((human)=> {
    //             const {id, name} = human
    //             console.log(human);
    //             return (
    //                 <div key={id} style={{marginTop: '5px'}}>
    //                     <h4>{name}</h4>
    //                 </div>
    //             );
    //         })}
    //         </div>
    //     </article> */}

       
    // </section>

    

  )
}

export default NoteBasics