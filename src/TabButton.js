import React from 'react';
import "./TabButton.css";
import classnames from 'classnames';

//const logHello = () => console.log('hello')
const getClassName = (isActive) => (isActive ? "TabButton active" : "TabButton");

const TabButton = ({tabNumber, currentTab, onTabSwitch, label}) => (
    <button className={getClassName(currentTab === tabNumber)}
    onClick={onTabSwitch}
    type="button"
    >
    {label}
    </button>
);

export default TabButton;