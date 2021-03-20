import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
   



    render(){
        
        return(
            <div>
                <h2>welcome to your home page</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home)