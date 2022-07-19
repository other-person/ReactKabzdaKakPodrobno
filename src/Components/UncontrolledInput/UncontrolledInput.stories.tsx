import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input />


export const TrackValueUncontrolledInput = () => {

    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange} /> - {value} </>

}
export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    const save = () =>{
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input  ref={inputRef}/> - actual value: {value} <br/>
        <button onClick={save}>Save</button>
    </>
   
}

export const ControlledInput = () => <input  value = {"Hello world"}/>