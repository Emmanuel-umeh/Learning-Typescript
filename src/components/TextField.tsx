import React, { useState, useRef } from "react"


interface Person {
name : string,
age : number
}


interface Props {
    text : string,
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void,
    data : Person


}

interface Count {
  value :   number | null | undefined
}

const TextField : React.FC <Props> = ({text, data, handleChange}) =>{

    const [count, setCount] = useState<Count>({value : 5})


    setCount({value : 8})

   const ref = useRef<HTMLInputElement>(null)
const divref = useRef<HTMLDivElement>(null)
    

    return(
        <div ref = {divref}>

            {/* <h1>{props.}</h1>
            <input  */}
            <h3>{text}</h3>


            <h4> written by {data.name}</h4>

            <input ref = {ref} onChange = {handleChange}></input>

            

        </div>
    )
}

export default TextField