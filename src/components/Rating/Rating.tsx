import React from 'react';
import local from './Rating.module.scss';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => {
    switch (props.value) {
        case 1:
            return (
                <section className={local.ratingWrap}>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </section>
            )
        case 2:
            return (
                <section className={local.ratingWrap}>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </section>
            )
        case 3:
            return (
                <section className={local.ratingWrap}>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </section>
            )
        case 4:
            return (
                <section className={local.ratingWrap}>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                </section>
            )
        case 5:
            return (
                <section className={local.ratingWrap}>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                </section>
            )
        default:
            return (
                <section className={local.ratingWrap}>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </section>
            );
    }
}

type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    if (props.selected) {
        return (
            <div className={local.itemSelect + " " + local.item}>
                star
            </div>
        )
    } else {
        return (
            <div className={local.itemNotSelect + " " + local.item}>
                star
            </div>
        )
    }
}