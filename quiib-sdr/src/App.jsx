import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../src/components/pages/Landing';
import Apply from './components/pages/apply';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/apply" element={<Apply />} />
    </Routes>
    
    </div>
  );
}

export default App;
