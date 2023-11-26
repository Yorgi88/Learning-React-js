import { Person } from './Person';
import React from 'react'
import { people } from '../../../data'

const List = () => {
  return (
    <div>{people.map((person)=>{
        return (
            <Person key={person.name} {...person} />
            // lets set it up as a separate component using glean extension
        )
    })}
    </div>
  )
}

export default List