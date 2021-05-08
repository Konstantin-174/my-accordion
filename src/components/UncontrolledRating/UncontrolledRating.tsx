import React, {useState} from 'react';
import local from './UncontrolledRating.module.scss';
import {RatingValuesType} from '../../App';

export const UncontrolledRating = () => {

    const [value, setValue]= useState<RatingValuesType>(0)

    return (
        <section className={local.ratingWrap}>
            <Star setValue={setValue} value={1} selected={value > 0}/>
            <Star setValue={setValue} value={2} selected={value > 1}/>
            <Star setValue={setValue} value={3} selected={value > 2}/>
            <Star setValue={setValue} value={4} selected={value > 3}/>
            <Star setValue={setValue} value={5} selected={value > 4}/>
        </section>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValuesType
    setValue: (value:RatingValuesType) => void
}

const Star = (props: StarPropsType) => {
    return (
        <div
            className={props.selected ? `${local.itemSelect + ' ' + local.item}` : `${local.itemNotSelect + ' ' + local.item}`}
            onClick={() => props.setValue(props.value)}
            >
            star
        </div>
    )
}