import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const Greeting = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <h4 style={{
//       color: "Red",
//       marginLeft: "100px",
//       marginRight: "100px",
//       width: "100%"
//     }}>
//       Hii {children}
//     </h4>
//   );
// }

// const MyButton = ({ color }: { color: string }) => {
//   return (
//     <button style={{
//       border: "5px solid",
//       borderColor: color
//     }}>
//       Click here
//     </button>
//   );
// }



const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Failed to find the root element.');
}

