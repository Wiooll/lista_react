import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Threads from './App'; // Importe o componente Threads aqui

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Threads
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
      />
    </div>
  </React.StrictMode>,
);