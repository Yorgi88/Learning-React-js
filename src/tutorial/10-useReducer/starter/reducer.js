import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { data } from '../../../data';

const Reducer = (state, action) => {

    // i think whatever we put here is the new state};
    if (action.type === CLEAR_LIST){
      // this action.type === is the new state  i think
      return {...state, people: []}
      // mew value of people will be empty array
    }
  
    if (action.type === RESET_LIST) {
      return {...state, people: data}
    }
  
    if (action.type === REMOVE_ITEM) {
      let newPeople = state.people.filter((person) => person.id !== action.payload.id);
      return {...state, people: newPeople}
    }
  }

  export default Reducer;