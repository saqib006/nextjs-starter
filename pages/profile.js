import React, { Component } from 'react';
import {connect} from 'react-redux';

class profile extends Component {
  constructor(props){
    super(props)

    console.log('profile', props)
  }


  static async getInitialProps({ isServer, store }) {
    console.log('its',isServer, store)
    return isServer
  }


  render() {
    return (
      <div>
        <h2>profile</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    user:state.authReducer.user
  }
}



export default connect(mapStateToProps, null)(profile)
