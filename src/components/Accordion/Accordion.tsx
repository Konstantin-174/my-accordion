import React from 'react';
import local from './Accordion.module.scss';

type AccordionPropsType = {
    title: string
    compress: boolean
    onClick: (compress: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {


    return (
        <section className={local.accordionWrap}>
            <div className={local.titleWrap}>
                <AccordionTitle compress={props.compress}
                                title={props.title}
                                onClick={props.onClick}
                />
            </div>
            {!props.compress && <AccordionBody/>}
        </section>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (compress: boolean) => void
    compress: boolean
}

const AccordionTitle = (props: AccordionTitlePropsType) => {

    return (
        <h3 className={local.accordionTitle} onClick={() => {props.onClick(!props.compress)}}>
            {props.title}
        </h3>
    )
}

const AccordionBody = () => {
    return (
        <ul className={local.listWrap}>
            <li className={local.listItem}>Mind</li>
            <li className={local.listItem}>Wishes</li>
            <li className={local.listItem}>Time</li>
        </ul>
    )
}
