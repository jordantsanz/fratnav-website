/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import mvc from '../img/mvc.svg';
import will from '../img/will.jpeg';
import mel from '../img/melissa.jpg';
import jordan from '../img/jordan.jpg';
import thread from '../img/threadDiagram.svg';

class Main extends Component {
  render() {
    return (
      <div className="main-box">
        <div className="panel-1">
          <div className="panel-1-text-group">
            <div className="title">GreekNav</div>
            <div className="subtext" id="subtext-panel-1">A one stop shop for all of Dartmouth students Fraternity and Sorority interest, needs, and curiosities
            </div>
            <div className="button-flex">
              <a href="/files/GreekNav.zip" download="GreekNav.zip" target="_blank">
                <button className="button" type="button">DOWNLOAD THE APK</button>
              </a>
              <a href="/files/GreekNavCode.zip" download="GreekNavCode.zip" target="_blank">
                <button className="button" type="button">DOWNLOAD THE PROJECT</button>
              </a>
            </div>
          </div>
        </div>
        <div className="panel-2">
          <div className="bottom-row">
            <div className="panel-2-text-group">
              <div className="subtitle">SHOW &amp; TELL SLIDES</div>
              <div className="subtext" id="panel-2-subtext">slides from out first, second, third, and final in class demos. we break down our process, plans, progress, and goals for the project.</div>
              <a className="link" href="https://docs.google.com/presentation/d/1NaXuWJah_q58QgGdb56ELLmkkJYVnGfGJS-HQw49EPU/edit?usp=sharing">
                <button className="button" id="view-slides" type="button">DEMO DAY</button>
              </a>
              <a className="link" href="https://docs.google.com/presentation/d/1XhyGIaX5AccZ9xtdkFZ0AGRPGsAnJEujRhcqWvgGtLw/edit?usp=sharing">
                <button className="button" id="view-slides" type="button">SHOW AND TELL III</button>
              </a>
              <a className="link" href="https://docs.google.com/presentation/d/19Aa6UWuOGyznhCzKHNHrheBAeyXcw7YuZhpE4q-i1hA/edit#slide=id.g35f391192_00">
                <button className="button" id="view-slides" type="button">SHOW AND TELL II</button>
              </a>
              <a className="link" href="https://docs.google.com/presentation/d/1MiFLh7QTsexJ-eNDlGF91bA6E_dv8H6pd_tZMjBGqLU/edit#slide=id.g35f391192_00">
                <button className="button" id="view-slides" type="button">SHOW AND TELL I</button>
              </a>
            </div>
          </div>
        </div>
        <div className="panel-3 firstimage">
          <img src={mvc} className="mvc" alt="mvc diagram" />
          <div className="panel-3-text-group">
            <div className="subtitle" id="panel-3-subtitle">MVC</div>
            <div id="panel-3-subtext" className="subtext">The project model, view, and controller diagram</div>
          </div>
        </div>
        <div className="panel-3 otherimage">
          <img src={thread} className="mvc" alt="mvc diagram" />
          <div className="panel-3-text-group">
            <div className="subtitle" id="panel-3-subtitle">Threaded Diagram</div>
            <div id="panel-3-subtext" className="subtext">The project thread diagram</div>
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
