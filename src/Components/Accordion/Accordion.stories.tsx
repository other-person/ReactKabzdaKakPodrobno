import {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordions',
    component: Accordion
}

const callback = action("I want to rerender")
const onClick = action("Some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} items={[]} onChange={callback}
                                                  onClick={onClick}/>

export const UserUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false}
                                                    items={[
                                                        {title: "Valera", value: 1},
                                                        {title: "Tarik", value: 2},
                                                        {title: "Vasia", value: 3}]}
                                                    onChange={callback}
                                                    onClick={onClick}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={"Users"} collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: "Valera", value: 1},
                          {title: "Tarik", value: 2},
                          {title: "Vasia", value: 3}
                      ]}
                      onClick={(id) => alert(`Showed me id ${id}`)}

    />
}


