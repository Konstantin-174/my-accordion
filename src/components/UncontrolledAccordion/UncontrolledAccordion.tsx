import React, {useState} from 'react';
import local from './UncontrolledAccordion.module.scss';


export const UncontrolledAccordion = () => {

    const [compress, setCompress] = useState(true)

    return (
        <section className={local.accordionWrap}>
            <div className={local.titleWrap}>
                <AccordionTitle onClick={() => setCompress(!compress)} title="Control your: "/>
            </div>
            {!compress && <AccordionBody/>}
        </section>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 className={local.accordionTitle} onClick={ () => props.onClick()}>
            {props.title}
        </h3>
    )
}

const AccordionBody = () => {
    return (
        <ul className={local.listWrap}>
            <li className={local.listItem}>Dream</li>
            <li className={local.listItem}>Think</li>
            <li className={local.listItem}>Action</li>
        </ul>
    )
}
