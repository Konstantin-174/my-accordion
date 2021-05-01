import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function App() {
    return (
        <div className="App">
            <Accordion title="What will I do?"
                       collapsed={true}
            />
            <Rating value={1}/>
            <Accordion title="What did I do?"
                       collapsed={false}
            />
            <Rating value={4}/>
        </div>
    );
}

export default App;
