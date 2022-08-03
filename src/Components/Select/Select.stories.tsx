import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select
}

const ShowAction = "Show some think"

export const WithValue = () => {
    const [value, setValue] = useState(1)

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: 1, title: "Minsk"},
                    {value: 2, title: "Moscow"},
                    {value: 3, title: "Kiev"}
                ]}/>
    </>
}

export const WithOutValue = () => {
    const [value, setValue] = useState(null)
    return <>

        <Select onChange={setValue}
                value={value}
                items={[
                    {value: 1, title: "Minsk"},
                    {value: 2, title: "Moscow"},
                    {value: 3, title: "Kiev"}
                ]}/>
    </>
}
