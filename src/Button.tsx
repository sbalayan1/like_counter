import React from 'react'

interface ButtonProps {
    handleClick(): void
}

export default function Button(props: ButtonProps) {
    const {handleClick} = props

    return (
        <>
            <button onClick={handleClick}>Like</button>
        </>
    )
}