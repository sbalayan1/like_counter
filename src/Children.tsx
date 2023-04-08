import React from 'react'

interface ChildrenProps {
    children: React.ReactNode //better than using JSX.Element[]
}

export default function MyChildren({children}: ChildrenProps) {
    return (
        <>
            {children}
        </>
    )
}