
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'


class AdventureCard extends Component {
    render() {
      // console.log(this.props)
        return (
            <Card>
                {/* <img src="public/images/Holi-Festival-in-Nandgaon-India.jpg" alt="image" /> */}
            <Card.Content>
              <Card.Header>{this.props.adventure.title}</Card.Header>
              <Card.Meta>{this.props.adventure.location}</Card.Meta>
              <Card.Description>
                {this.props.adventure.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            
            </Card.Content>
          </Card>
        )
    }
}

export default AdventureCard










  