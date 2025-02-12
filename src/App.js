import React from 'react';
//import './App.css';
import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import Button from './components/Button';

function App() {
  return (
    <>
      <div style={{ 
        marginTop: '20px 0',

       }}>
        <Banner />
      </div>
      <div>
        <Button />
      </div>
      <div>
        <About />
      </div>
    </>

  );
}

export default App;
