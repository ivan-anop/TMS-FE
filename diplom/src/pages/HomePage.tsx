import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ThisDay from "../components/ThisDay";
import ThisDayInfo from "../components/ThisDayInfo";
import Days from "../components/Days";
import Tabs from "../components/Tabs";
import { useCustomDispatch, useCustomSelector } from '../hooks/store';
import { fetchCurrentWeather } from '../store/thunks/fetchCurrentWeather'



const HomePage = () => {
  const dispatch = useCustomDispatch();

  const {weather} =useCustomSelector ((state) => state.currentWeatherSliceReducer)

  useEffect(() => {
    dispatch(fetchCurrentWeather('paris'));
  }, [])
  return (
    <MainPageWrapper>
      <Header />
      <div className="wrapper">
      <ThisDay weather={weather} />
      <ThisDayInfo />
      </div>
      <Tabs/>
      <Days />
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.section`
   width: 100vw;
   height: 100vh;
   background-color: white;
   max-width: 1200px;
   margin: 0 auto; 
   
   .wrapper {
    display: flex;
    justify-content: space-between;
   }
 `;

export default HomePage;
