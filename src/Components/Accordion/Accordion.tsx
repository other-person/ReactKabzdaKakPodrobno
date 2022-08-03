import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: ()=>void;
    items:Array<ItemType>
    onClick: (value: any)=>void
}
type ItemType = {
    value: any
    title: string
}

export const Accordion = (props: AccordionPropsType) => {

    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitle = {
    title: string;
    onChange: ()=>void;
}

const AccordionTitle = (props: AccordionTitle ) => {
    return <div>
        <h1 onClick={(e)=>{props.onChange()}}>
            {props.title}
        </h1>
    </div>
}

type AccordionBodyPropsType = {
   items:Array<ItemType>
    onClick: (value: any)=>void
}

const AccordionBody = (props:AccordionBodyPropsType) => {
    return <div>
        <ul>
            {props.items.map((i, index)=><li onClick={()=> {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    </div>
}
