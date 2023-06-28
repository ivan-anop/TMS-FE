import React, { PropsWithChildren } from 'react';
import Select from 'react-select'
import styled from 'styled-components';
import App from '../App'

const Header = ({children}: PropsWithChildren) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  return (
    <HeaderWrapper>
      <header className='header'>
      <div className='logoWrapper'>
        <div className='logo'>
          <img className="logoWeather" src="LogoWeather.svg" alt='Logo' />
        </div>
        <div className='title'>Weather</div>
      </div> 
      <div className='searchWrapper'>
        <img className="chengeTheme"src="Theme.svg" alt="theme" />
        <Select className="select" options={options} />
      </div>
      </header>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
 .logoWrapper {
  padding: 37px 0;
 }
 .title{
  color: #4793FF;
  margin-left: 20px;
  font-size: 25px;
  font-weight: 700;
 }
 .logoWrapper {
  display: flex;
  align-items: center;
 }
 .header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  
 }
 .searchWrapper {
  display: flex;
  justify-content: space-between;
 }
 .searchWrapper {
  align-items: center;
 }
 .chengeTheme {
  margin-right: 20px;
  cursor: pointer;
 }
 .select {
  cursor: pointer;
 }
`
export default Header;
