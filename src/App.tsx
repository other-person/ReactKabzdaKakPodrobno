import './App.css';
import React, {useState} from 'react';
import {UncontrolledSwitcher} from "./Components/UncontrolledSwither/UncontrolledSwitcher";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./Components/Accordion/Accordion";
import {Switcher} from "./Components/Switcher/Switcher";
import {Rating, RatingValueType} from "./Components/Rating/Rating";



function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(true)
    return (

        <div>


            {<Accordion titleValue ={"Menu"}
                          collapsed={accordionCollapsed}
                          setCollapsed={setAccordionCollapsed}/>}



            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}


            <Switcher on={on} onChange={setOn}/>

        </div>

    );
}

export default App;
