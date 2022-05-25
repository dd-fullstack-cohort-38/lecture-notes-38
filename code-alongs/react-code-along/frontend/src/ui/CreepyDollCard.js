import React from 'react'

export function CreepyDollCard (props) {

  const {name, creepyLevel} = props.creepyDoll

  return (
    <>
      <h2>{name}</h2>
      <p>has a creepy level of {creepyLevel}</p>
    </>
  )
}