import React from 'react';
import ReactDOM from 'react-dom/client';
function Greeting() {
  return <h1>Component 1</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
