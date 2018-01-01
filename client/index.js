import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../common/App';

// <Route component={Signin} path="/signin" />
// <Route component={Signup} path="/signup" />


render(
  <AppContainer>
    <BrowserRouter>
      <div>
        <Route component={App} path="/test" />
      </div>
    </BrowserRouter>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('../common/App', () => {
    render(<AppContainer>
      <App />
    </AppContainer>, document.getElementById('root'));
  });
}
