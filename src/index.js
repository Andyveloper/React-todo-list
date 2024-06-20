import React from 'react';
import { createRoot } from 'react-dom/client'

import TodoContainer from './assets/components/TodoContainer';

import './assets/scss/main.scss'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);