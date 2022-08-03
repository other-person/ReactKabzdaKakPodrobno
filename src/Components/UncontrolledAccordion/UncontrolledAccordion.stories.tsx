import {useState} from "react";

export default {
    title: 'Accordion'
}

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setCollapsed: (collapsed: boolean)=>void;
}

export const Accordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle titleValue={"Title"} onClick={()=>{setCollapsed(!collapsed)}}/>
        {!collapsed && <AccordionBody />}
    </div>
}

type AccordionTitle = {
    titleValue: string;
    onClick: ()=>void;
}

const AccordionTitle = (props: AccordionTitle ) => {
    return <div>
            <h1 onClick={()=>{props.onClick()}}>
                {props.titleValue}
            </h1>
    </div>
}

const AccordionBody = () => {
    return <div>
        <ul>
            <li>Number1</li>
            <li>Number2</li>
            <li>Number3</li>
            <li>Number4</li>
            <li>Number5</li>
        </ul>

    </div>
}




