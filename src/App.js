import React from 'react';
import logo from './logo.svg';
import CircleForm from './components/forms/Circle';
import SquareForm from './components/forms/Square';
import PlaceholderForm from './components/forms/Float';
function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
