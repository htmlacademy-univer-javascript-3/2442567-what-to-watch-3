import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App filmGenre={Setting.filmGenre} filmTitle={Setting.filmTitle} filmYear={Setting.filmYear} filmImage={Setting.filmImage} />
  </React.StrictMode>
);
