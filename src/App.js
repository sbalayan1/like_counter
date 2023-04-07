import React, { useState } from 'react';
import './App.css';
import Button from './Button';
function App() {
    const [likes, setLikes] = useState(0);
    const handleClick = () => {
        setLikes(likes => likes + 1);
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("p", { className: "App-logo" }, likes),
            React.createElement(Button, { handleClick: handleClick }))));
}
export default App;
