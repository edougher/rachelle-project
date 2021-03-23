import React, { Component } from 'react'
import { connect } from 'react-redux'
import { displayAdventures, loginSuccess } from '../actions/index'


class Login extends Component {

    state = {
        userName: '',
        password: '',
        error: ''
    }

handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault()
    const reqObj = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
    }
        this.setState({
            name: '',
            password: ''
         })
        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(respData => {
            if (respData.error) {
                this.setState({
                    error: respData.error
                })
            }else {
             this.props.loginSuccess(respData.user)
             localStorage.setItem('token', respData.token)
             this.props.history.push('/home')

            }
        })
    }
getAdventures = () => {
    fetch('http://localhost:3000/adventures')
    .then(resp => resp.json())
    .then(adventures => {
    console.log(adventures)
      this.props.displayAdventures(adventures)
   })


}
render() {
        this.getAdventures()
        return (
            <div>
            {this.state.error ? <h3 style={{color: 'red'}}>{this.state.error}</h3> : null }
                <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="required field">
                    <label>UserName</label>
                        <div className="ui input">
                            <input type="text" name={'userName'} placeholder="UserName" onChange={this.handleChange}/>
                        </div>
                    </div>
                        <div className="required field">
                            <label>Password</label>
                                <div className="ui input">
                                    <input type="text" name={'password'} placeholder="Password" onChange={this.handleChange}/>
                                </div>
                        </div>
                        <button type="submit" className="ui button">Submit</button>
                 </form>
            </div>
        )
    }
}

//points to whatever action we associtate with it
const mapDispatchToProps = {
    loginSuccess: loginSuccess,
    displayAdventures: displayAdventures
}


export default connect(null, mapDispatchToProps)(Login)

