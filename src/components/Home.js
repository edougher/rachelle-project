import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
   



    render(){
        console.log(this.props)
        
        return(
            <div>
                <h2>welcome to your home page</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.adventures)
    return {
        user: state.user,
        adventures: state.adventures
    }
}

export default connect(mapStateToProps)(Home)