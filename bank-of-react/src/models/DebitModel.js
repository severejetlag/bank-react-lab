import axios from 'axios'

class DebitModel{
  static all(){
    let request = axios.get("http://localhost:4000/debits")
    return request
  }
}

export default DebitModel
