import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './component/AmirReza/calculator.js';

function App() {
  return(<>
  <Calculator/>
  </>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// ReactDOM.render(<App/>, document.getElementById("root"));

