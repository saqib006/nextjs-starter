import React, { Component } from 'react'
import axios from 'axios'

export default class register extends Component {


    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            pass:''
        }
    }

    changeHandler = (eve) => {
        this.setState({
            [eve.target.name]:eve.target.value
        })
    }

    registerHandler = () => {
        const {name, email, pass} = this.state
        let userInfo = {
            name:name,
            email:email,
            pass:pass
        }
        axios.post('http://localhost:3000/auth/register', userInfo).then((res)=>{
            console.log('axios', res)
        })
    }

  render() {
    return (
      <div>

        <div className="row">
        <div className="col s6 offset-s3">
        <div className="row">

        <div className="input-field">
          <input id="name" type="text" onChange={this.changeHandler} name="name" className="validate"/>
          <label htmlFor="name">Your Name</label>
        </div>

        <div className="input-field">
          <input id="email" type="email" onChange={this.changeHandler} name="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input id="password" type="password" onChange={this.changeHandler} name="pass" className="validate"/>
          <label htmlFor="password">Password</label>
        </div>

        <button className="btn" onClick={this.registerHandler}>Sign Up</button>

        </div>
        </div>
        </div>


      </div>
    )
  }
}
