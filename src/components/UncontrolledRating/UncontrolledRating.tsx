import React, {useState} from 'react';
import local from './UncontrolledRating.module.scss';



export const UncontrolledRating = () => {

    const [value, setValue]= useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    return (
        <section className={local.ratingWrap}>
            <Star setValue={setValue} id={1} selected={value > 0}/>
            <Star setValue={setValue} id={2} selected={value > 1}/>
            <Star setValue={setValue} id={3} selected={value > 2}/>
            <Star setValue={setValue} id={4} selected={value > 3}/>
            <Star setValue={setValue} id={5} selected={value > 4}/>
        </section>
    )
}

type StarPropsType = {
    selected: boolean
    id: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (value:0 | 1 | 2 | 3 | 4 | 5) => void
}

const Star = (props: StarPropsType) => {
    return (
        <div
            className={props.selected ? `${local.itemSelect + ' ' + local.item}` : `${local.itemNotSelect + ' ' + local.item}`}
            onClick={() => props.setValue(props.id)}
            >
            star
        </div>
    )
}