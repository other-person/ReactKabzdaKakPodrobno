import './App.css';
import React from 'react';
import {Accordion} from "./Components/Accordion";
import {Rating} from "./Components/Rating";
import {Title} from "./Components/Title";
import {Switcher} from "./Components/Switcher";

function App() {
    return (

        <div>
            <Title/>
            <Accordion titleValue ={"Menu"} collapsed = {false}/>
            <Accordion titleValue ={"Users"} collapsed = {false}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
            <Switcher state = {false}/>
        </div>

    );
}

export default App;
