import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Profile from './components/Profile'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }
  render() {
    return (
      <div>
       <Navigation />
      <button onClick={()=> this.setState({show: !this.state.show})}>show profile</button>
      { this.state.show ? <Profile /> : null }
      </div>
    )
  }
}
