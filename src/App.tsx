import './App.css';
import React from 'react';
import {Accordion} from "./Components/Components";
import {Rating} from "./Components/Rating";
import {Title} from "./Components/Title";

function App() {
    return (

        <div>
            <Title/>
            <Accordion/>
            <Rating value = {3}/>
            <Rating value = {5}/>
        </div>

    );
}

export default App;
