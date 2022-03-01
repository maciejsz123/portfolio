import React, { Component } from 'react';
import ProjectElement from './projectElement';
import hangman from '../images/hangman.PNG';
import clock from '../images/clock.PNG';
import calendar from '../images/callendar.PNG';
import '../styles/experiments.sass';
import Hangman from './hangman/App.js';
import Clock from './clock/clock.jsx';
import Calendar from './calendar/calendar.jsx';

class Experiments extends Component {
  constructor() {
    super();
    this.state = {
      experiments: [ 'hangmanProject', 'calendarProject', 'clockProject' ],
      displayed: false
    }
  }

  display(id) {
    this.setState({displayed: true});
    this.state.experiments.forEach( elem => {
      if(elem === id) {
        document.querySelector(`#${elem}`).classList.remove('hidden');
        document.querySelector(`#${elem}`).classList.add('display');
      } else {
        document.querySelector(`#${elem}`).classList.remove('display');
        document.querySelector(`#${elem}`).classList.add('hidden');
      }
    })
  }

  hide() {
    this.state.experiments.forEach((elem, i) => {
      document.querySelector(`#${elem}`).classList.remove('display');
      document.querySelector(`#${elem}`).classList.add('hidden');
    });
    this.setState({displayed: false});
  }

  render() {

    return(
      <div>
      <div id='experimentsComp'>
        <div className='headline-div to-animate'>
          <h2 className='headline'>Experiments</h2>
        </div>
        <div className='to-animate' id='experiments'>
          <ProjectElement src={hangman} text='hangman' github='https://github.com/maciejsz123/hangman' link={() => this.display(this.state.experiments[0])} technology={['React-JS', 'Redux', 'Sass', 'wordnik API']}/>
          <ProjectElement src={calendar} text='calendar' github='https://github.com/maciejsz123/calendar' link={() => this.display(this.state.experiments[1])} technology={['Vanilla JS', 'CSS']}/>
          <ProjectElement src={clock} text='clock' github='https://github.com/maciejsz123/cssClock' link={() => this.display(this.state.experiments[2])} technology={['Vanilla JS', 'CSS']}/>
        </div>
        {this.state.displayed ? <div className='btn-experiment' onClick={() => this.hide()}>hide<span className='btn-arrow'></span></div> : ''}
      </div>
        <div className='hidden' id={this.state.experiments[0]}>
          <Hangman />
        </div>
        <div className='hidden' id={this.state.experiments[1]}>
          <Calendar />
        </div>
        <div className='hidden' id={this.state.experiments[2]}>
          <Clock />
        </div>
      </div>
    )
  }
}

export default Experiments;
