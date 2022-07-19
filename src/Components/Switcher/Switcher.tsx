import React, {useState} from 'react';
import s from "./Switcher.module.css"




type SwitcherPropsType = {
        on: boolean
        onChange:(on:boolean)=>void
}
export const Switcher = (props: SwitcherPropsType) => {
    const onStyle = {
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle = {
        backgroundColor: props.on ? "white" : "red"
    };
    const indicator = {
        backgroundColor: props.on ? "green" : "red"
    };

    return (
        <div className={s.wrapper}>
            <div style={onStyle} className={s.windowLeft} onClick={(event) => {
                props.onChange(true)
            }}>
                ON
            </div>
            <div style={offStyle} className={s.windowRight} onClick={(event) => {
                props.onChange(false)
            }}>
                OFF
            </div>
            <div style={indicator} className={s.light}>

            </div>
        </div>
    );
};