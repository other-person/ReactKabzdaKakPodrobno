import React, {useState} from 'react';
import s from "../Switcher/Switcher.module.css"

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

    return (
        <div className={s.wrapper}>
            <div style={onStyle} className={s.windowLeft} onClick={(event) => {
                setOn(true)
            }}>
                ON
            </div>
            <div style={offStyle} className={s.windowRight} onClick={(event) => {
                setOn(false)
            }}>
                OFF
            </div>
            <div style={indicator} className={s.light}>

            </div>
        </div>
    );
};

