import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sample from './component/sample.js';

function App() {
  return(<>
  <Sample/>
  </>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// ReactDOM.render(<App/>, document.getElementById("root"));
