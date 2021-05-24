import React, {useState} from 'react';
import {Rating} from './Rating';
import {action} from '@storybook/addon-actions';
import {RatingValuesType} from '../../App';

export default {
    title: 'Test Rating',
    component: Rating
}

export const EmptyRating = () => <Rating value={0} onClick={action("Rating clicked!")}/>
export const Rating1 = () => <Rating value={1} onClick={action("Rating clicked!")}/>
export const Rating2 = () => <Rating value={2} onClick={action("Rating clicked!")}/>
export const Rating3 = () => <Rating value={3} onClick={action("Rating clicked!")}/>
export const Rating4 = () => <Rating value={4} onClick={action("Rating clicked!")}/>
export const Rating5 = () => <Rating value={5} onClick={action("Rating clicked!")}/>
export const TestRating = () => {
    const [value, setValue] = useState<RatingValuesType>(0)
    return <Rating value={value} onClick={setValue}/>
}
