import React, {useState} from 'react'
import MyChildren from './Children'

interface MoreProps {
    message: any
}

interface PostProps extends MoreProps {
    id: number
    title: string
}[] //adding the [] basically says that any type of PostProps is an array of objects whose objects have an id and title property

function AnotherComponent(): JSX.Element {
    const [title, setNewTitle] = useState("")

    const changeTitle = (e: React.MouseEvent) => {
        setNewTitle("Wooo")
        console.log(e.target)
    }

    //react onclick typescript

    return (
        <div>
            <h1  onClick={(e) => console.log(e.target)}>{title}</h1>
            <button type="button" value="hello world" onClick={changeTitle}>Click Me</button>
        </div>
    )
}

function State({message, title, id}: PostProps) {
    const [state, setState] = useState<string | null>(null) //using a union type lets us set the initial type of state to null and later string when some change event occurs    

    return (
        <>
            {state}
            title: {title}
            id: {id}
            message: {message}
            <MyChildren>
                <div></div>
                <AnotherComponent/>
            </MyChildren>
        </>
    )
}

export default State