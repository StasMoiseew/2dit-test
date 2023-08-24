import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/fonts/ProximaNova/proximanova_bold.otf';
import './assets/fonts/ProximaNova/proximanova_regular.ttf';
import './assets/fonts/Paragon/Parangon530C.ttf';
import './assets/fonts/HelveticaNeueCyr-Roman.ttf';
import './assets/fonts/GothamPro/gothampro_light.ttf';
import './assets/fonts/GothamPro/gothampro_bold.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
