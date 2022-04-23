import './App.css';
import React, {useState} from 'react';
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion";
import {Rating, RatingValueType} from "./Components/Rating";
import {Title} from "./Components/Title";
import {UncontrolledSwitcher} from "./Components/UncontrolledSwitcher";
import {UncontrolledRating} from "./Components/UncontrolledRating";
import {Accordion} from "./Components/Accordion";
import {Switcher} from "./Components/Switcher";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(true)
    return (

        <div>
            {/*<Title/>*/}
            {/*<UncontrolledAccordion titleValue ={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue ={"Users"}/>*/}

            {/*<Accordion titleValue ={"Menu"}
                          collapsed={accordionCollapsed}
                          setCollapsed={setAccordionCollapsed}/>*/}


            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}

            {/*<UncontrolledSwitcher/>*/}
            <Switcher on={on} onChange={setOn}/>

        </div>

    );
}

export default App;
