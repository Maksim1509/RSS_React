import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import React from 'react';
import { Response } from 'express';
('@types/express');
import { Provider } from 'react-redux';
import store from './store';

export const render = (url: string, response: Response) =>
  ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    {
      bootstrapModules: ['/src/entry-client.tsx'],
      onShellReady() {
        response.setHeader('content-type', 'text/html');
      },
    }
  );
