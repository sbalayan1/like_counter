import React from 'react';
export default function Button(props) {
    const { handleClick } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: handleClick }, "Like")));
}
