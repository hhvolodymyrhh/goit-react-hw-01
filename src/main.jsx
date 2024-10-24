import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
// бібліотека для використання класів приймає строки та обєкти (встановлює їх якщо тру)
// npm i clsx
// import clsx from "clsx";
// бібліотека для нормалізації стилів
// npm i modern-normalize
import 'modern-normalize';
// бібліотека для іконок https://react-icons.github.io/react-icons/
// npm install react-icons --save

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
