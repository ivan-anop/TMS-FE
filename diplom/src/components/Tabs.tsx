import React from "react";
import styled from "styled-components";

interface Props {}

const Tabs = (props: Props) => {
  const tabs = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];
  return (
    <TabsWrapper>
      <div className="tabs">
        <div className="tabs__wrapper">
          {tabs.map((tab) => (
            <div className="tab" key={tab.value}>
              {tab.value}
            </div>
          ))}
        </div>
        <div className="cancel">Отменить</div>
      </div>
    </TabsWrapper>
  );
};
export default Tabs;

const TabsWrapper = styled.div`
.tabs {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 7px;
}
.cancel,
.tab {
    box-shadow: 2px 5px 25px -3px rgba(100, 100, 100, 0.25);
    border-radius: 5px;
    padding: 9px 20px;
    margin-right: 15px;
    color:black;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    cursor: pointer;
}
.cancel {
    margin-right: 0;
}

.tab {
    &.active (
        background: blue;
        color: fff;
    )
}

.tabs__wrapper {
    display: flex;
}
`;
