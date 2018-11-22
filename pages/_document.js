import React, { Component } from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
        <html>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
          <style>{`
          body { margin: 0; padding:0 } 
          `}</style>
        </Head>
        <body>

        <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo">NextsJs Awesome</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/login">Log In</a></li>
                <li><a href="/register">Sign Up</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            </div>
        </nav>

          <Main />

          <NextScript />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </body>
      </html>
    )
  }
}
