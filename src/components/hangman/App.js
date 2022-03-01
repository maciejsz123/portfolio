import React, { Component } from 'react';
import { connect } from 'react-redux';
import Man from './components/man';
import Missed from './components/missed';
import Correct from './components/correct';
import './styles/App.sass';
import { fetchWord } from './actions/wordActions';

class Hangman extends Component {
  componentDidMount() {
    this.props.fetchWord();
  }
  
  render() {
    if(!this.props.word) {
      return <div className="Loading">Loading...</div>
    } else {
      return (
        <div className="AppHangman">
          <Man />
          <Missed />
          <Correct />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  word: state.word.word
});

export default connect(mapStateToProps, { fetchWord })(Hangman);
