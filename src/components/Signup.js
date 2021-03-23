import React, { Component } from 'react'
import { connect } from 'react-redux'


class Signup extends Component {

    state = {
        userName: '',
        password: '',
        confirmPassword: ''
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
    debugger
    fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(respData =>{
        console.log(respData)
    })

}
    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="required field">
                <label>UserName</label>
                    <div className="ui input">
                        <input type="text" placeholder="UserName" onChange={this.handleChange}/>
                    </div>
                </div>
                    <div className="required field">
                        <label>Password</label>
                            <div className="ui input">
                                <input type="text" placeholder="Password" onChange={this.handleChange}/>
                            </div>
                    </div>
                    <div className="required field">
                        <label>Confirm Password</label>
                            <div className="ui input">
                                <input type="text" placeholder="Confirm Password" onChange={this.handleChange}/>
                            </div>
                    </div>
                    <button type="submit" className="ui button">Create Account</button>
        </form>
        )
    }
}

export default Signup