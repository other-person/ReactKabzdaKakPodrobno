import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed:(collapsed:boolean)=>void
}

export const Accordion = (props: AccordionPropsType) => {

    return <div>
        <AccordionTitle title={props.titleValue} onClick ={()=> {props.setCollapsed(!props.collapsed)}}/>
        {!props.collapsed  && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
        </div>
    );
};

const AccordionBody = (props: any) => {
    return    <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
};