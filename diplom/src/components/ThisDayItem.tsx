import React from 'react'; 
import { Item } from './ThisDayInfo';
import IndicatorSvgSelector from '../indicator/IndicatorSvgSelector'
import styled from 'styled-components';

interface Props {
    item: Item;
}

const ThisDayItem = ({ item }: Props)   => {
    const {icon__id, name, value} = item;
  return (
    <ThisDayItemWrapper>
    <div className='item'>
        <div className='indicator'>
            <IndicatorSvgSelector id={icon__id} />
        </div>
        <div className='indicator__name'>{name}</div>
        <div className='indicator__value'>{value}</div>
    </div>
    </ThisDayItemWrapper>
  );
}

const ThisDayItemWrapper = styled.div`
.item {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    &:last-of-type {
        margin-bottom: 0;
    }
}

.indicator {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color; #fff;
    box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
    border-radius: 50%;
    margin-right: 20px;
}

.indicator__name{ 
font-size: 14px;
color: #939CB0;
margin-right: 20px;
}

.indicator__value {
    font-size: 14px;
    color: #000000;
}

`

export default ThisDayItem;

