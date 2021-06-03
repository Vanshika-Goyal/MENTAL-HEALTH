import React, { Component } from 'react';
import './CoverPage.css';
import Image from '../../config/imgConfig';

class CoverPage extends Component {
  render() {
    return (
      <div className="main">
        <div className="Coverpagewrapper">
          <div className="Header">
            <div className="logo">
              <img src={Image.peacetlogo} alt="logo" />
            </div>
            <div className="Navbar">
              <ul>
                <li className="homeli">HOME</li>
                <li className="homeli">ABOUT US</li>
                <li className="homeli">CHAT</li>
                <li className="homeli">BLOG</li>
                <li className="homeli">SELF TEST</li>
              </ul>
            </div>
          </div>
          <div className="Body">
            <div className="Leftside">
              <p>GROW<br></br>
           WITH YOUR <br></br>
           OWN<br></br>
           SPEED
           </p>
            </div>
            <div className="Rightside">
              <div className="Webname">
                <h1>PEACET</h1>
              </div>
              <div className="Image">
                <img src={Image.peacetphoto1} />
              </div>
            </div>
          </div>
          <div className="footer">
          </div>
        </div>
      </div>


    );


  }
}

export default CoverPage;