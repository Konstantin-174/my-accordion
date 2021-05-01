import React from 'react';
import local from './Rating.module.scss';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => {
    return (
        <section className={local.ratingWrap}>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </section>
    )
}

type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    if (props.selected) {
        return (
            <div className={local.itemSelect + ' ' + local.item}>
                star
            </div>
        )
    } else {
        return (
            <div className={local.itemNotSelect + ' ' + local.item}>
                star
            </div>
        )
    }
}