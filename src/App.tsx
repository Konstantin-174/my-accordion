import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    return (
        <div className={"App"}>
            <Accordion title="What will I do?"
            />
            <Accordion title="What did I do?"
            />
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <UncontrolledRating/>
            <OnOff />
            <OnOff />
        </div>
    );
}

export default App;
