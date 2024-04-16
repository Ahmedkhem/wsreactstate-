import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
      }
      increment = function() {this.setState({count: this.state.count +1})}
      decrement = function() {this.setState({count: this.state.count > 0 ? this.state.count -1 : 0})}

  render() {
    return (
      <div>
        <Button onClick={()=> this.increment()} variant='outline-success'>+</Button>
      <h3>{this.state.count}</h3>
      <Button onClick={()=> this.decrement()} variant='outline-danger'>-</Button>
      </div>
    )
  }
}
