import React from 'react';
import local from "./Accordion.module.scss";

type AccordionPropsType = {
    title: string
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <section className={local.accordionWrap}>
            <AccordionTitle title={props.title}/>
            <AccordionBody />
        </section>
    )
}

const AccordionTitle = (props: AccordionPropsType) => {
    return (
        <h3 className={local.accordionTitle}>
            {props.title}
        </h3>
    )
}

const AccordionBody = () => {
    return (
        <ul className={local.listWrap}>
            <li className={local.listItem}>1</li>
            <li className={local.listItem}>2</li>
            <li className={local.listItem}>3</li>
        </ul>
    )
}
