import React, {useState} from 'react';
import s from "./Switcher.module.css"

type SwitcherPropsType = {
    state: boolean
}

export const Switcher = (props: SwitcherPropsType) => {


const on = {
    backgroundColor: props.state ? "green" : "white"
};
const off = {
    backgroundColor: props.state ? "white" : "red"
};
const indicator = {
    backgroundColor: props.state ? "green" : "red"
};

let[status, setStatus]=useState(true)

    return (
        <div className={s.wrapper}>
            <div  style = {on} className={s.windowLeft} onClick={()=>{setStatus(true)}}>
                ON
            </div>
            <div  style = {off} className={s.windowRight} onClick={()=>{setStatus(false)}}>
                OFF
            </div>
            <div style = {indicator} className={s.light}>

            </div >
        </div>
    );
};

