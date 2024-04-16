import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Counter from './components/Counter'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }
  render() {
    return (
      <div>
       <Navigation />
      <button onClick={()=> this.setState({show: !this.state.show})}>show counter</button>
      { this.state.show ? <Counter /> : null }
      </div>
    )
  }
}
