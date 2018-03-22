import React from 'react'

const Credit = props => {
  return(
    <div>
      <h2>{props.description}</h2>
      <p>{props.amount}</p>
      <p>{props.date}</p>
    </div>
  )
}

export default Credit
