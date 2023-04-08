
//essentially does the same but instead types our function the FunctionComponent type built into react. This lets us set the component to a specific type which then affects the available props
import React, {FC} from 'react'



interface FakeProps {
    readonly id: number
    name: string


}

interface MoreProps {
    phoneNumber: number
}


//Note that React.FC is discouraged
const MyForm: FC<FakeProps | MoreProps> = (props) => {
    return (
        <form>
             <input>{"phoneNumber" in props ? props.phoneNumber : props.name}</input>
            <input></input>
        </form>
    )
}

export default MyForm