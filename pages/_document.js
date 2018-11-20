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
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
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
