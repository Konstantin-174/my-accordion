import React from 'react';
import local from './Rating.module.scss';
import {RatingValuesType} from '../../App';

type RatingPropsType = {
    value: RatingValuesType
    onClick: (value: RatingValuesType) => void
}

export const Rating = (props: RatingPropsType) => {
    return (
        <section className={local.ratingWrap}>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </section>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValuesType) => void
    value: RatingValuesType
}

const Star = (props: StarPropsType) => {
    return (
        <div className={props.selected ? `${local.itemSelect + ' ' + local.item}` : `${local.itemNotSelect + ' ' + local.item}`}
             onClick={ () => props.onClick(props.value)}>
            star
        </div>
    )
}