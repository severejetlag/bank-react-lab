import React,{Component} from 'react'
import DebitModel from '../models/DebitModel'
import DebitsList from './DebitsList'

class DebitsPage extends Component{
  constructor(){
    super()
    this.state = {
      debits: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    DebitModel.all().then(res => {
      console.log(res.data);
      this.setState({
        debits: res.data
      })
    })
  }
  render(){
    return(
      <main>
        <DebitsList debits={this.state.debits}/>
      </main>
    )
  }
}

export default DebitsPage
