import React from 'react';
import Router from './router';

export default () => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="/vite.svg" />
      <title>My app</title>
    </head>
    <body>
      <div id="app">
        <Router />
      </div>
    </body>
  </html>
);
