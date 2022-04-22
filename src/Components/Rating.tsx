import React from 'react';

type RatingPropsType = {
    value : 0|1|2|3|4|5
}

export const Rating = (props: RatingPropsType) => {
return    <div>
        <Star selected={props.value >0}/>
        <Star selected={props.value >1}/>
        <Star selected={props.value >2}/>
        <Star selected={props.value >3}/>
        <Star selected={props.value >4}/>
    </div>;

};

const Star = (props: any) => {
    if (props.selected === true) return <span><b>Star</b></span>
    return <span>Star</span>

    return <span><b>Star</b></span>
}

