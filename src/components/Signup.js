import React, { Component } from 'react'



class Sighnup extends Component {
    render() {
        return (
            <form class="ui form">
            <div class="required field">
                <label>UserName</label>
                    <div class="ui input">
                        <input type="text" placeholder="UserName"/>
                    </div>
                </div>
                    <div class="required field">
                        <label>Password</label>
                            <div class="ui input">
                                <input type="text" placeholder="Password"/>
                            </div>
                    </div>
                    <div class="required field">
                        <label>Confirm Password</label>
                            <div class="ui input">
                                <input type="text" placeholder="Confirm Password"/>
                            </div>
                    </div>
                    <button type="submit" className="ui button">Submit</button>
        </form>
        )
    }
}

export default Sighnup