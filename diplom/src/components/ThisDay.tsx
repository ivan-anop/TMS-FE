import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Weather } from '../store/types/types'

interface Props {
  weather: Weather
}

 export const ThisDay = ({ weather }: Props) => {
  return (
    <ThisDayWrapper>
      <div className="this__day">
        <div className="top__block">
          <div className="top__block-wrapper">
            <div className="this__temp">{weather.main.temp}°</div>
            <div className="this__day-day">Сегодня</div>
          </div>
          <img className="sun" src="Sun.svg" alt="sun" />
        </div>
        <div className="bottom__block">
          <div className="time">Время: 21:54</div>
          <div className="сity">Город: Санкт-Петербург</div>
        </div>
      </div>
    </ThisDayWrapper>
  );
};

const ThisDayWrapper = styled.div`
  .this__day {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    box-shadow: 2px 5px 25px -3px rgba(100, 100, 100, 0.25);
    border-radius: 20px;
  }
  .top__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }
  .sun {
    width: 119px;
    height: 119px;
  }
  .this__temp {
    font-size: 96px;
    font-weight: 500;
    color: #4793ff;
  }
  .this__day-day {
    font-size: 40px;
    color: black;
  }
  .time {
    font-size: 25px;
    color: #939cb0;
  }
  .сity {
    font-size: 25px;
    color: #939cb0;
  }
`;
export default ThisDay;
