import React, {useState} from "react";

export default {
    title: 'UncontrolledSwither'
}

type UncontrolledSwitchPropsType = {
    on: boolean,
    onChange: (on: boolean)=>void
};

export function UncontrolledSwitcher (props: UncontrolledSwitchPropsType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '50px',
        border: 'black solid 2px',
        display: 'inline-block',
        margin: '10px 5px 0 10px',
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: '50px',
        border: 'black solid 2px',
        display: 'inline-block',
        margin: '10px 5px 0 0',
        backgroundColor: on ? "white" : "red"
    };
    const indicator = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: 'black solid 2px',
        display: 'inline-block',
        backgroundColor: on ? "green" : "red"
    };
    const onClicked = () => {
       setOn( true )
    }
    const offClicked = () => {
        setOn (false)

    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle}onClick={offClicked }>Off</div>
            <div style={indicator}></div>
        </div>
    )
}