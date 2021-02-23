/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import mvc from '../img/mvc.svg';
import will from '../img/will.jpeg';
import mel from '../img/melissa.jpg';
import jordan from '../img/jordan.jpg';

class Main extends Component {
  render() {
    return (
      <div className="main-box">
        <div className="panel-1">
          <div className="panel-1-text-group">
            <div className="title">GreekNav</div>
            <div className="subtext" id="subtext-panel-1">A one stop shop for all of Dartmouth students Fraternity and Sorority interest, needs, and curiosities
            </div>
            <button className="button" type="button">DOWNLOAD THE APK</button>
          </div>
        </div>
        <div className="panel-2">
          <div className="middle-row">
            <div className="subtitle" id="showandtell">SHOW &amp; TELL</div>
          </div>
          <div className="bottom-row">
            <div className="panel-2-text-group">
              <div className="subtitle">Show and Tell I</div>
              <div className="subtext" id="panel-2-subtext">slides from out first in class demo. we break down our process, plans, and goals for the project.</div>
              <a className="link" href="https://docs.google.com/presentation/d/1MiFLh7QTsexJ-eNDlGF91bA6E_dv8H6pd_tZMjBGqLU/edit#slide=id.g35f391192_00">
                <button className="button" id="view-slides" type="button">VIEW SLIDES</button>
              </a>
            </div>
          </div>
        </div>
        <div className="panel-3">
          <img src={mvc} className="mvc" alt="mvc diagram" />
          <div className="panel-3-text-group">
            <div className="subtitle" id="panel-3-subtitle">MVC</div>
            <div id="panel-3-subtext" className="subtext">The project model, view, and controller diagram</div>
          </div>
        </div>
        <div className="panel-4">
          <div className="top-row-4">
            <div className="pictures-group">
              <div className="top-top-row">
                <div className="pic">
                  <a href="https://www.linkedin.com/in/williamperez23/">
                    <img className="image" id="will" src={will} alt="will perez" />
                  </a>
                </div>
                <div className="pic">
                  <a href="https://www.linkedin.com/in/melissa-valencia2/">
                    <img className="image" id="mel" src={mel} alt="melissa valencia" />
                  </a>
                </div>
              </div>

              <div className="bottom-top-row">
                <div className="pic">
                  <a href="https://www.linkedin.com/in/jordansanz/">
                    <img className="image" id="jordan" src={jordan} alt="jordan sanz" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-row-4">
            <div id="panel-4-subtitle" className="subtitle">THE TEAM</div>
          </div>
          <div className="bottom-row-4">
            <div className="panel-4-text-group">
              <div className="subtitle">FratNav Team</div>
              <div id="panel-4-subtext" className="subtext">three cs majors trying to make a difference in the greek system. check us out! </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
