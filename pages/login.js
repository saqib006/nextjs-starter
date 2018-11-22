import React, { Component } from 'react'
import axios from 'axios';
export default class login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            pass:''
        }
    }

    changeHandler = (eve) => {
        this.setState({
            [eve.target.name]:eve.target.value
        })
    }

    loginHandler = () => {
      const {email, pass} = this.state
      let userInfo = {
          email:email,
          password:pass
      }
      axios.post('http://localhost:3000/auth/login', userInfo).then((res)=>{
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
          <input id="email" onChange={this.changeHandler} name="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input id="password" onChange={this.changeHandler} name="pass" type="password" className="validate"/>
          <label htmlFor="password">Password</label>
        </div>

        <button className="btn" onClick={this.loginHandler}>Log In</button>

        </div>
        </div>
        </div>
      </div>
    )
  }
}
