import { stringify } from "querystring";
import Select from "react-select";
import styled from "styled-components";
import ThisDayItem  from "../components/ThisDayItem";

interface Props {}

export interface Item {
  icon__id: string;
  name: string;
  value: string;
}

const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon__id: "temp",
      name: "Темпреатура",
      value: "20° - ощущается как 17°",
    },
    {
      icon__id: "pressure",
      name: "Давление",
      value: "765 мм рт. ст. - нормальное",
    },
    {
      icon__id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon__id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <ThisDayInfoWrapper>
      <div className="this-day-info">
        <div className="this-day-info__items">
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon__id} item={item} />
          ))}
        </div>
        {/* <img className='cloud__img' src="cloud.svg" alt="cloud" /> */}
      </div>
    </ThisDayInfoWrapper>
  );
};

const ThisDayInfoWrapper = styled.div`
  .this-day-info {
    position: relative;
    padding: 40px;
    max-width: 750px;
    width: 100%;
    background-color: white;
    box-shadow: 2px 5px 25px -3px rgba(100, 100, 100, 0.25);
    border-radius: 20px;
    background: white;
  }

  .cloud__img {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default ThisDayInfo;
