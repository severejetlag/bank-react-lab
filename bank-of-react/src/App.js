import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile'

class App extends Component {
  render() {
    const accountBalance = 14568.27
    const currentUser = {
      userName: 'bob_loblaw',
      memberSince: '08/23/99'
    }

    const HomeComponent = () => (<Home accountBalance={accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}/>);

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/profile" render={UserProfileComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
