import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from "@/Page-blocks/Header";
import FirstBlock from "@/Page-blocks/First-block";
import SecondBlock from "@/Page-blocks/Second-block"
// import Tilt from './tilt'

class App extends Component {
  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <Header></Header>
          <FirstBlock></FirstBlock>
          <SecondBlock></SecondBlock>
        </div>
          {/* <Tilt className="Tilt" style={{ height: 250, width: 250 }} onMouseLeave={this.onMouseLeave}>
            <div className="Tilt-inner">
            👽
            </div>
          </Tilt>
          <Tilt className="Tilt" style={{ height: 250, width: 250 }} onMouseLeave={this.onMouseLeave}>
            <div className="Tilt-inner">
            👽
            </div>
          </Tilt> */}
      </div>
    );
  }
}

export default App;