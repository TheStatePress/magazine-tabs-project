import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import TabButton from './TabButton'
import TabContainer from './TabContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1//just an object
    }
  }

  makeOnTabSwitch(tabNumber) {
    console.log(tabNumber)
    return () => {
      this.setState({
        currentTab: tabNumber
      })
    }
  }

  render() {
    const { currentTab } = this.state;//const currentTab = this.state.currentTab;
    return (
      <div className="App">
        <div>
          <TabButton tabNumber={1} currentTab={currentTab} onTabSwitch={this.makeOnTabSwitch(1)} label="Tab 1" />
          <TabButton tabNumber={2} currentTab={currentTab} onTabSwitch={this.makeOnTabSwitch(2)} label="Tab 2" />
          <TabButton tabNumber={3} currentTab={currentTab} onTabSwitch={this.makeOnTabSwitch(3)} label="Tab 3" />
          <TabButton tabNumber={4} currentTab={currentTab} onTabSwitch={this.makeOnTabSwitch(4)} label="Tab 4" />
          <h2>we're on tab: {this.state.currentTab}</h2>
        </div>
        <div>
          <TabContainer currentTab={this.state.currentTab} tabNumber={1}>
            this is tab one content
          </TabContainer>
          <TabContainer currentTab={this.state.currentTab} tabNumber={2}>
            this is tab two content
          </TabContainer>
          <TabContainer currentTab={this.state.currentTab} tabNumber={3}>
            this is tab three content
        </TabContainer>
          <TabContainer currentTab={this.state.currentTab} tabNumber={4}>
            this is tab four content
        </TabContainer>
        </div>
      </div>

    );
  }
}

export default App;
