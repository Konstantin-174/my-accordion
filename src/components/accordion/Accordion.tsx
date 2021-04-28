import React from 'react';
import {AccordionTitle} from './title/AccordionTitle';
import {AccordionBody} from './body/AccordionBody';

export const Accordion = () => {
    return (
        <section>
            <AccordionTitle/>
            <AccordionBody/>
        </section>
    )
}