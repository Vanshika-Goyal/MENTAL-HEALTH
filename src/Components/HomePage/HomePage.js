import React, { Component } from 'react';
import './HomePage.css';
import Image from '../../config/imgConfig'

class HomePage extends Component {
    render() {
        return (
            <div className="full">
                <div className="Top">
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
                    <div className="Content">
                        <div className="left">
                            <img src={Image.doctor} />
                        </div>
                        <div className="right">
                            <div className="heading"><h2>What is Mental Health?</h2></div>
                            <div className="text">{<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>}</div>

                        </div>
                    </div>
                </div>

                <div className="Middle">
                <div className="cards">
                <div className="card1">
                <div className="Image1"></div>
                <h1>CAUSE 1</h1>
                <div className="context">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div className="card2">
                <div className="Image2"></div>
                <h1>CAUSE 2</h1>
                <div className="context">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div className="card3">
                <div className="Image3"></div>
                <h1>CAUSE 3</h1>
                <div className="context">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                </div>
                </div>
                <div className="Bottom">
                <div className="LEFTDIV"></div>
                <div className="RIGHTDIV"></div>
                </div>
            </div>
        );
    }
}

export default HomePage;