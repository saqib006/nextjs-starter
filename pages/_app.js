import React, { Component } from 'react'
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import makeStore from '../store/index';
class MyApp extends Component {

    static async getInitialProps ({ Component, ctx }) {
        const pageProps = Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
    
        return { pageProps }
      }

  render() {
      const {Component, pageProps, store} = this.props
    return (
     <Container>
         <Provider store={store}>
            <Component {...props}/>
         </Provider>
     </Container>
    )
  }
}
export default withRedux(makeStore)(MyApp)