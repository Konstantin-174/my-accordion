import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function App() {
    return (
        <div className="App">
            <Accordion/>
            <Rating value={1}/>
            <Rating value={4}/>
        </div>
    );
}

export default App;
