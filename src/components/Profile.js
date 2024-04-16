import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person : {
                fullname: "Cristiano Ronaldo",
                bio:"best football player in the world",
                imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cristiano_Ronaldo_WC2022_-_01_%28cropped%29.jpg/190px-Cristiano_Ronaldo_WC2022_-_01_%28cropped%29.jpg",
                profession:"pro football player",
            }
        }}
  render() {
    return (
      <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.state.person.imgSrc} />
      <Card.Body>
        <Card.Title>
            {this.state.person.fullname}
        </Card.Title>
        <Card.Text>
          {this.state.person.bio}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    )
  }
}

