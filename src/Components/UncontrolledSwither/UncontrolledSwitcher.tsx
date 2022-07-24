import React, {useState} from 'react';
import s from "../Switcher/Switcher.module.css"
import {action} from "@storybook/addon-actions";

type SwitcherPropsType = {

}

export const UncontrolledSwitcher = (props: SwitcherPropsType) => {

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

    const callback = action ("ON or OFF changing");

    return (
        <div >
            <div style={onStyle}  onClick={(event) => {setOn(true)}} onChange={callback}>
                ON
            </div>
            <div style={offStyle}  onClick={(event) => {setOn(false)}} onChange={callback}>
                OFF
            </div>
            <div style={indicator} >

            </div>
        </div>
    );
};

