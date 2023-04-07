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
          <p className="App-logo">{likes}</p>
          <Button handleClick={handleClick} />
        </header>
      </div>
  );
}

export default App;
