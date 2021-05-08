import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';

export type RatingValuesType =  0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [value, setValue] = useState<RatingValuesType>(0)
    const [compress, setCompress] = useState<boolean>(true)

    return (
        <div className={"App"}>

            <Accordion title="Control your:"
                       compress={compress}
                       onClick={setCompress}
            />
            <Rating value={value}
                    onClick={setValue}
            />

            <UncontrolledAccordion/>
            <UncontrolledRating/>
            <OnOff />
        </div>
    );
}

export default App;
