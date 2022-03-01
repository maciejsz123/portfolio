import React from 'react';
import '../styles/App.sass';
import { connect } from 'react-redux';
import { resetTheGame, fetchWord } from '../actions/wordActions';

function EndOfTheGame(props) {
  async function resetApp() {
    await props.resetTheGame();
    await props.fetchWord();
  }
  return(
    <React.Fragment>
      <div className="endOfGame" style={{'background': props.color}}>
      {props.mess}
      <button type="button" className="playAgain" onClick={resetApp}>PLAY AGAIN</button>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { resetTheGame, fetchWord })(EndOfTheGame);
