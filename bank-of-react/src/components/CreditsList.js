import React from 'react'
import Credit from './Credit'

const CreditsList = props => {
  const creditComponents = props.credits.map(credit => {
    return <Credit key={credit.id} description={credit.description} amount={credit.amount} date={credit.date}/>
  })
  return(
    <section>
      <h1>Credits List: </h1>
      {creditComponents}
    </section>
  )
}

export default CreditsList
