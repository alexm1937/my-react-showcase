import React, { useState } from 'react';
// import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';

function App() {

  //consts and props up here


  //returns html body 
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
