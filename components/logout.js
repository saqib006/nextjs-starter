import React, { Component } from 'react'
import {connect} from 'react-redux';
import authAction from '../store/action/authAction';
export default class Logout extends Component {
  render() {
    return (
      <div>
        <li><a href="/register">logout</a></li>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      user:state.authReducer.user
    }
  }
export default connect(mapStateToProps, null)(Logout)