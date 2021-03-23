
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'


class AdventureCard extends Component {
    render() {
        return (
            <Card>
              <img src={`http://localhost:3000/${this.props.adventure.image}`} />
            <Card.Content>
             
              <Card.Description> 
                {this.props.adventure.adventure.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            
            </Card.Content>
          </Card>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(AdventureCard)










  