import React from 'react'
import Debit from './Debit'



const DebitsList = props => {
  const debitComponents = props.debits.map(debit => {
    return <Debit key={debit.id} description={debit.description} amount={debit.amount} date={debit.date}/>
  })
  return(
    <section>
      <h1>Account Debits: </h1>
      {debitComponents}
    </section>
  )
}

export default DebitsList
