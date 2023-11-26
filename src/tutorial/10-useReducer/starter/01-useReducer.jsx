import React, { useReducer } from 'react';
import { data, people } from '../../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import Reducer from './reducer';


const defaultState  = {
  people: data, 
  isLoading: false,

}


// const CLEAR_LIST = "CLEAR_LIST";
// const RESET_LIST = 'RESET_LIST'
// const REMOVE_ITEM = 'REMOVE_ITEM'

// WE'VE IMPORTED THESE FILES FROM ACTIONS.JS





// const Reducer = (state, action) => {

//   // i think whatever we put here is the new state};
//   if (action.type === CLEAR_LIST){
//     // this action.type === is the new state  i think
//     return {...state, people: []}
//     // mew value of people will be empty array
//   }

//   if (action.type === RESET_LIST) {
//     return {...state, people: data}
//   }

//   if (action.type === REMOVE_ITEM) {
//     let newPeople = state.people.filter((person) => person.id !== action.payload.id);
//     return {...state, people: newPeople}
//   }
// }


// WE'VE IMPORTED THESE FROM REDUCER.JS



const ReducerBasics = () => {

    // into the usereducer now

  const [state, dispatch] = useReducer(Reducer, defaultState );
  // we pass in a reducer function and a default state





  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);\
    dispatch({type: REMOVE_ITEM,payload: {id} })
  };

  const ClearList = () => {
      // setPeople([]);
      dispatch({type: CLEAR_LIST});
  }


  const ResetList = () => {
    // setPeople(data);
    dispatch({type: RESET_LIST});
  }
  // Clear list has already been done check the onclick{}














// const Reducer = (state, action) => {
//   if (action.type === "clear out this shit") {
//     return {...state, people: []}
//   }
// }

// const defaultState = {
//   people: data,
// }


//   const [state, dispatch] = useReducer(Reducer, defaultState);



// const ClearFuck = () => {
//   dispatch({type: "clear out this shit"})
// }






  console.log(state);
  // add state to the people in the jsx land below
  
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
         <button
         className='btn'
         style={{ marginTop: '2rem' }}
         onClick={ResetList}
       >
         Reset all
       </button>
      ) : (
        <button
        className='btn'
        style={{ marginTop: '2rem' }}
        // onClick={() => setPeople([])}
        onClick={ClearList}
        
      >
        clear items
      </button>
      ) }
      {/* if people < 1 then  ACTIVATE THE RESET FEATURE... ELSE THE CLEAR FEATURE*/}





     

      {/* SO HERE WE ARE TRYING TO CREATE A FEATURE WHERE AFTER CLEARING THE DATA WE'LL NA ADD THE RESET FEATURE */}





    </div>
  );
};

export default ReducerBasics;


// Note that useReducer as a light version of redux which is a state management library
// as our application grows bigger we cant use useState to manage it.
// so we use useReducer