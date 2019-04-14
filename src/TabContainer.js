import React from "react";

const TabContainer = ({currentTab, tabNumber, children}) => {
    if(currentTab === tabNumber){
        return children;
    }
    return null;
};

export default TabContainer;