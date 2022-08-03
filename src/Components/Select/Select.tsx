import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value?: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [value, setValue] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItems = props.items.find(i => i.value === props.value)
    const hoverItems = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const showItems = () => setValue(!value)
    const ItemClick = (value: any) => {
        props.onChange(value);
        showItems()
    }
    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {props.onChange(pretendentElement.value)
                    break;}
                }
            }
        }

        if (e.key ==="Enter" || e.key === "Escape") {setValue(false)}
    }


return (
    <div>

        <div className={s.wrapper} onKeyUp={onKeyPress} tabIndex={0}>
            <h2 className={s.main} onClick={showItems}>{selectedItems && selectedItems.title}</h2>
            {
                value &&
                <div className={s.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => {
                            setHoveredElementValue(i.value)
                        }}
                        className={s.item + " " + (hoverItems === i ? s.selected : "")} key={i.value}
                        onClick={() => ItemClick(i.value)}
                    >{i.title}</div>)}
                </div>
            }
        </div>

    </div>
)
}
;