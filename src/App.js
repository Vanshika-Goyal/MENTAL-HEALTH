import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoverPage from '../src/Components/CoverPage/CoverPage';
import AboutUsPage from '../src/Components/AboutUsPage/AboutUsPage';
import HomePage from '../src/Components/HomePage/HomePage';
import ChatPage from '../src/Components/ChatPage/ChatPage';
import SelfTest from '../src/Components/SelfTestPage/SelfTestPage';
import BlogPage from '../src/Components/BlogPage/BlogPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <switch>
            <Route exact path='/' component={CoverPage} />
            <Route exact path='/Home' component={HomePage} />
            <Route exact path='/AboutUs' component={AboutUsPage} />
            <Route exact path='/Chat' component={ChatPage} />
            <Route exact path='/SelfTest' component={SelfTest} />
            <Route exact path='/Blog' component={BlogPage} />
          </switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;