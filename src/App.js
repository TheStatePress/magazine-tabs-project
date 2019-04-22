import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabButton from './TabButton';
import TabContainer from './TabContainer';
import img1 from './bargraph.jpeg';
import img2 from './usmap.png';
//tab changes 2
// import beeg from url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreview.redd.it%2Faoh4z6fwold21.png%3Fauto%3Dwebp%26s%3D235ccc0f2b4b68b909d18dea301fb828e4e79451&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2Fvideogamedunkey%2Fcomments%2Falfh67%2Fbeeg_beeg_yoshi%2F&docid=H_4Zi1Xfi07Z5M&tbnid=yFINRX5trk4UNM%3A&vet=10ahUKEwjnzt2Hm9vhAhX7FTQIHeR8AFgQMwg_KAAwAA..i&w=420&h=413&bih=898&biw=840&q=beeg%20yoshi&ved=0ahUKEwjnzt2Hm9vhAhX7FTQIHeR8AFgQMwg_KAAwAA&iact=mrc&uact=8);
//import logo from './logo.png'

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
          {/* <h2>we're on tab: {this.state.currentTab}</h2> */}
        </div>
        <div>
          <TabContainer currentTab={this.state.currentTab} tabNumber={1}>
            An important Atom Uwu
            <img src={logo} wdith='800ev' alt='atom'></img>

          </TabContainer>
          <TabContainer currentTab={this.state.currentTab} tabNumber={2}>
            <img src={img1} width='800ev' alt='graph'></img>
          </TabContainer>
          <TabContainer currentTab={this.state.currentTab} tabNumber={3}>
            <img src={img2} width="800ev" alt="United States"></img>
          </TabContainer>
          <TabContainer currentTab={this.state.currentTab} tabNumber={4}>
            this is tab four content
            {/* <img src={beeg}></img> */}
        </TabContainer>
        </div>
      </div>
    );
  }
}

export default App;
