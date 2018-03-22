import React, {Component} from 'react'
import CreditsList from './CreditsList'
import CreditModel from '../models/CreditModel'

class CreditsPage extends Component{
  constructor(){
    super()
    this.state = {
      credits: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    CreditModel.all().then(res => {
      this.setState({
        credits: res.data
      })
    })
  }
  render(){
    return(
      <section>
        <h1>Credits Page</h1>
        <CreditsList credits={this.state.credits}/>
      </section>
    )
  }
}

export default CreditsPage
