import React, { Component } from 'react'
import AdventureCard from './AdventureCard'
import { connect } from 'react-redux'
import { displayAdventures } from '../actions/index'


class Adventures extends Component {
state = {
    img: ''
}

 componentDidMount() {
     fetch('http://localhost:3000/adventures')
     .then(resp => resp.json())
     .then(adventures => {
         debugger
         console.log(adventures)
        this.props.displayAdventures(adventures)
     })
 }

  //renderAdventures = () => {
  //    return this.props.adventures.map(adventure =>(
  //     <AdventureCard 
  //     key={adventure.id}
  //     adventure={adventure}
  //     img={this.state.img} />
  //     ))
  //}

    render() {
        
        return (
             <div>
                <h4>adventures</h4>
                <AdventureCard 
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log(state.adventure)
    return {
        adventures: state.adventures
    }
}

const mapDispatchToProps = {
    displayAdventures: displayAdventures
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventures)