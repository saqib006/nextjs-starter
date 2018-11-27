import React, { Component } from 'react';
import {connect} from 'react-redux';
import authAction from '../store/action/authAction';
import Router from 'next/router';
class login extends Component {

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
      if(email !== '' && pass !== ''){
        let userInfo = {
          email:email,
          password:pass
      }
      this.props.login(userInfo)

  
        this.setState({
          email:'',
          pass:''
        })
      }
     
    }

  render() {
    return (
      <div>
        <div className="row">
        <div className="col s6 offset-s3">
        <div className="row">

        <div className="input-field">
          <input id="email" onChange={this.changeHandler} value={this.state.email} name="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input id="password" onChange={this.changeHandler} value={this.state.pass} name="pass" type="password" className="validate"/>
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
const mapStateToProps = (state) => {
  return{
    user:state.authReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      login : payload => {return dispatch(authAction.getUser(payload))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(login)