import React, { Component } from 'react'
import AdventureCard from './AdventureCard'
import { connect } from 'react-redux'
import { displayAdventures } from '../actions/index'


class Adventures extends Component {
state = {
    adventures: ''
}

getAdventures = () => {
    fetch('http://localhost:3000/adventures')
     .then(resp => resp.json())
     .then(adventures => {
         console.log(adventures)
        //this.state.adventures = adventures
        this.props.displayAdventures(adventures)
     })
}


    renderAdventures = () => {
        return this.props.state.adventures.all.map(adventure =>(
            <AdventureCard 
            key={adventure.id}
            adventure={adventure}
            image={adventure.image} />
        ))
    }
     
      
  

    render() {
        return (
             <div>
                <h4>adventures</h4>
                {
                    this.renderAdventures()

                }
            </div>
        )
    }
}

function mapStateToProps(state){
     console.log(state.adventure)
    return {
        state: state
    }
}

const mapDispatchToProps = {
    displayAdventures: displayAdventures
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventures)