import React from 'react';
import '../styles/App.sass';

export default function LetterInput(props) {
  if(props.letters.includes(props.word[props.num].toUpperCase())) {
    return(
      <div className="letterInput">{props.word[props.num].toUpperCase()}</div>
    )
  }
  return(
    <div className="letterInput"></div>
  )
}
