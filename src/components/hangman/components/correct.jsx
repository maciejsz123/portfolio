import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLetter, endOfGame } from '../actions/wordActions';
import LetterInput from './letterInput';
import EndOfTheGame from './endOfTheGame';
import '../styles/App.sass';

class Correct extends Component {

  componentDidMount() {
    this.props.getLetter();
  }

  shouldComponentRender() {
    let arr = Array.from(Array(this.props.word.length).keys());
    let elements = arr.map( (element, i) => (
      <LetterInput key={i} word={this.props.word} num={i} letters={this.props.letters}/>
    ));
    return elements;
  }

  winCondition() {
    if(this.props.word) {
      let arr = Array.from(this.props.word);
      let wonTheGame = arr.every( (letter) => {
        return this.props.letters.includes(letter);
      });
      if(wonTheGame) {
        this.props.endOfGame('win');
      }
    }
  }

  render() {
    let elements;
    if(!this.props.word.pending) {
      elements = this.shouldComponentRender();
      this.winCondition();
    }
    let lostDiv = '';
    if(this.props.win === true) {
      lostDiv = <EndOfTheGame mess={"YOU WIN"} color="green" />
    }
    return(
      <div className="correct">
        {elements}
        {lostDiv}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  word: state.word.word,
  letters: state.word.letters,
  win: state.word.win
});

export default connect(mapStateToProps, { getLetter, endOfGame })(Correct);
