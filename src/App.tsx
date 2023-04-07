import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'

function App() {
  const [likes, setLikes] = useState(0)
  const handleClick = () => {
    setLikes(likes => likes + 1)
  }


  return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <p className="App-logo">{likes}</p>
          <Button handleClick={handleClick} />
        </header>
      </div>
  );
}

export default App;
