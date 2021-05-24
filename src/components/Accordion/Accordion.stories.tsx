import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    title: "Test Accordion",
    component: Accordion
}

export const CollapsedAccordion = () => <Accordion title={"Menu"} compress={true} onClick={action("Accordion clicked!")}/>
export const UncollapsedAccordion = () => <Accordion title={"Menu"} compress={false} onClick={action("Accordion clicked!")}/>

export const ModeAccordion = () =>{
    const [compress, setCompress] = useState<boolean>(true)
    return <Accordion title={"Menu"} compress={compress} onClick={() => {setCompress(!compress)}}/>
}