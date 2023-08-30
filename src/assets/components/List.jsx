import React from 'react'
import Person from './Person'

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
      <button
        type='button'
        className='btn btn-block'
        onClick={() => setPeople([])}
      >
        clear all
      </button>
    </section>
  )
}

export default List
