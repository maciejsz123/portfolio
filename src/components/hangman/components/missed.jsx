import React, { Component } from 'react';
import { connect } from 'react-redux';
import { endOfGame } from '../actions/wordActions';
import EndOfTheGame from './endOfTheGame';
import '../styles/App.sass';

class Missed extends Component {
  constructor() {
    super();
    this.state = {
      man: ['head',
      'neck',
      'torso',
      'leftArm',
      'rightArm',
      'leftHand',
      'rightHand',
      'leftLeg',
      'rightLeg',
      'leftFoot',
      'rightFoot']
    }
  }

  componentDidUpdate() {
    if(this.state.man.length === 0) {
      this.props.endOfGame();
      return 0
    }
    let className = this.state.man.shift();

    document.getElementsByClassName(className)[0].style.visibility = 'visible';
    if(this.state.man.length === 0) {
      this.props.endOfGame("lost");
      return 0
    }
  }

  render() {
    let letters = this.props.wrongLetters.map( (letter, i) => {
      return <div key={i}>{letter}</div>
    });

    let lostDiv = '';
    if(this.props.win === false) {
      lostDiv = <EndOfTheGame mess={"YOU LOST"} color="red"/>
    }

    return(
      <div className="missed">
        <div className="header">MISSED:</div>
        <div className="letters">{letters}</div>
        {lostDiv}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  wrongLetters: state.word.wrongLetters,
  win: state.word.win
});

export default connect(mapStateToProps, { endOfGame })(Missed);
