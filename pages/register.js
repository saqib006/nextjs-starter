import React, { Component } from 'react'
import {connect} from 'react-redux';
import authAction from '../store/action/authAction';

class register extends Component {


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
        if(name !== '' && email !== '' && pass !== ''){
            let userInfo = {
                name:name,
                email:email,
                pass:pass
            }

            this.props.signup(userInfo)

            this.setState({
                name:'',
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
          <input id="name" type="text" value={this.state.name} onChange={this.changeHandler} name="name" className="validate"/>
          <label htmlFor="name">Your Name</label>
        </div>

        <div className="input-field">
          <input id="email" type="email" value={this.state.email} onChange={this.changeHandler} name="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input id="password" type="password" value={this.state.pass} onChange={this.changeHandler} name="pass" className="validate"/>
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

const mapStateToProps = (state) => {
    return{
      user:state.authReducer.user
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        signup : payload => {return dispatch(authAction.addUser(payload))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(register)
