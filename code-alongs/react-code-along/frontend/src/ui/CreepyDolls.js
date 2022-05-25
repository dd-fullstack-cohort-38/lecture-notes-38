import React from 'react'
import { CreepyDollCard } from './CreepyDollCard'

export function CreepyDolls () {

  // this is where I would put the logic part of this component
  const creepyDolls = [
    {
      name: 'big baby',
      creepyLevel: 11
    },
    {
      name: 'bozo',
      creepyLevel: 5
    },
    {
      name: 'cookie jar',
      creepyLevel: 2
    }
  ]

  return (
    <>
      <h1>Creepy Dolls</h1>
      {creepyDolls.map(creepyDoll => <CreepyDollCard creepyDoll={creepyDoll} key={creepyDoll.name}/> )}
    </>
  )
}