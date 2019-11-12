import React from 'react';
import logo from './logo.svg';
import CircleForm from './components/forms/form.circle';
import SquareForm from './components/forms/form.square';
import PlaceholderForm from './components/forms/forms.placeholder';
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
