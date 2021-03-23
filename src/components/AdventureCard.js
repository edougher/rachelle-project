
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'


class AdventureCard extends Component {
    render() {
      // console.log(this.props)
        return (
            <Card>
              <img src={`http://localhost:3000/${this.props.img}`} />
            <Card.Content>
             
              <Card.Description> 
                {/*this.props.adventure.description*/}
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
    img: state.adventures
  }
}

export default connect(mapStateToProps)(AdventureCard)










  