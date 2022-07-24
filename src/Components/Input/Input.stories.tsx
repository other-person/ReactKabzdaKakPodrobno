import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input />

export const SimpleInput = () => <input  value = {"Hello world"}/>

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


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)}

    return <input value = {parentValue} onChange={onChange}/>

};

export const ControlledSelect = () => {

    const [parentSelect, setParentSelect] = useState<string | undefined>("2")

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {setParentSelect(e.currentTarget.value)}

    return <select value = {parentSelect} onChange={onChange}>

        <option>None</option>
        <option value="1">Minsk </option>
        <option value="2">Moscow </option>
        <option value="3">Kiev</option>

    </select>


};

export const ControlledCheckBox = () => {

    const [parentCheck, setParentCheck] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentCheck(e.currentTarget.checked)}

    return <input  type = "checkbox" checked={parentCheck} onChange={onChange}/>

};