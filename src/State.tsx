import React, {useState} from 'react'

interface MoreProps {
    message: any
}

type PostProps = {
    id: number
    title: string
}[] //adding the [] basically says that any type of PostProps is an array of objects whose objects have an id and title property

function State({message}: MoreProps) {
    const [state, setState] = useState<string | null>(null) //using a union type lets us set the initial type of state to null and later string when some change event occurs

    

    return (
        <>
            {state}
            {message}
        </>
    )
}

export default State