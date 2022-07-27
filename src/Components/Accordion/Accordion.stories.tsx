import {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordions',
    component: Accordion
}

const callback = action("I want to rerender")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} items={[]} onChange={callback}/>

export const UserUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} items={["Tarik","Dimd","Jeka","Yo","NeYo"]} onChange={callback}/>

export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true)

    return <Accordion titleValue={"Users"} collapsed={value} onChange={()=>setValue(!value)} items={["Tarik","Dimd","Jeka","Yo","NeYo"]}/>
}


