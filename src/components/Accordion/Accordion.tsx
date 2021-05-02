import React, {useState} from 'react';
import local from './Accordion.module.scss';
import {GoListUnordered} from 'react-icons/go';

type AccordionPropsType = {
    title: string
}

export const Accordion = (props: AccordionPropsType) => {

    const [compress, setCompress] = useState(true)

    return (
        <section className={local.accordionWrap}>
            <div className={local.titleWrap}>
                <AccordionTitle title={props.title}/>
                <GoListUnordered onClick={() => {
                    setCompress(false)
                }}/>
            </div>
            {!compress && <AccordionBody/>}
        </section>
    )
}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
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
