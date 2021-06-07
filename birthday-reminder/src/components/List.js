import React from 'react'
import Person from './Person'

const List = ({people}) => {

 return (

    people.map(person => {

      return (
        <Person key={person.id} person={person} />
      )

    })

 )
}

export default List;
