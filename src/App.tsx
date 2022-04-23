import './App.css';
import React, {useState} from 'react';
import {Accordion} from "./Components/Accordion";
import {Rating, RatingValueType} from "./Components/Rating";
import {Title} from "./Components/Title";
import {Switcher} from "./Components/Switcher";
import {UncontrolledRating} from "./Components/UncontrolledRating";




function App() {

    let[ratingValue, setRatingValue]=useState<RatingValueType>(0);
    let[accordionCollapsed, setAccordionCollapsed]=useState<boolean>(false)
    return (

        <div>
            {/*<Title/>*/}
            <Accordion titleValue ={"Menu"} collapsed={accordionCollapsed}/>
            <Accordion titleValue ={"Users"} />

            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}

            {/*<Switcher/>*/}
            {/*<Switcher/>*/}
            {/*<Switcher/>*/}
        </div>

    );
}

export default App;
