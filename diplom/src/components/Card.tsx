import Ract from "react";
import { Day } from "./Days";
import GlobalSvgSelector   from "../indicator/GlobalSvgSelector";
import styled from "styled-components";


interface Props {
  day: Day;
}
const Card = ({ day }: Props) => {
  return (
  <CardWrapper>
    <div className="card">
      <div className="day">{day.day}</div>
      <div className="day__info">{day.day_info}</div>
      <div className="img">
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className="temp__day">{day.temp_day}</div>
      <div className="temp__night">{day.temp_night}</div>
      <div className="info">{day.info}</div>
    </div>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
.card {
    display: flex;
    flex-direction: column;
    background: rgba(70, 147, 255, 0.2);
    border-radius: 10px;
    padding: 10px;
    width: 149px;
    transition: 0.3s;
    cursor: pointer;
}
`