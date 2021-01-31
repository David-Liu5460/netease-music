import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import store from './store';

import routes from './router';

import React, { memo } from 'react';
import HYAppHeader from "./components/app-header";
import HYAppFooter from "./components/app-footer";

import { HashRouter } from 'react-router-dom';

export default memo(function App() {
    return (
      <Provider store={store}>
        <HashRouter>
          <HYAppHeader/>
          {renderRoutes(routes)}
          <HYAppFooter/>  
        </HashRouter>
      </Provider>
    )
})
