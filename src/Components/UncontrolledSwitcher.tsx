import React, {useState} from 'react';
import s from "./Switcher.module.css"

type SwitcherPropsType = {

}

export const UncontrolledSwitcher = (props: SwitcherPropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        backgroundColor: on ? "white" : "red"
    };
    const indicator = {
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

