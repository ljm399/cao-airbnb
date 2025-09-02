import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';

import 'normalize.css';
import './assets/css/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // Suspense应该放在Provider里面:因为Provider是异步加载,即Suspense与懒加载那些还没加载完成,所有导致Provider里面没有值
  // 总之与懒加载和异步处理有关(底层代码)
  // 同时也是打印三次的原因
    <React.StrictMode>
        <HashRouter>
          <Provider store={store}>
              <ThemeProvider theme={theme}>
                <App />
              </ThemeProvider>
          </Provider>
        </HashRouter>
    </React.StrictMode>
);

