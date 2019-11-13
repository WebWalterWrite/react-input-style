import React from 'react';
import logo from './logo.svg';
import CircleForm from './components/forms/Circle';
import SquareForm from './components/forms/Square';
import PlaceholderForm from './components/forms/Float';
function App() {
  return (
    <>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React-Vanilla-Input by</h1>
      </header>
      <main>
        <CircleForm />
        <SquareForm />
        <PlaceholderForm />
      </main>
    </>
  );
}

export default App;
