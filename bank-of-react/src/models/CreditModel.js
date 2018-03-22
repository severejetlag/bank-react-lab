import axios from 'axios'

class CreditModel{
  static all(){
    let request = axios.get("http://localhost:4000/credits")
    return request
  }
}

export default CreditModel
