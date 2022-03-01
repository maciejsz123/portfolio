import { FETCH_WORD_REQUEST,
  FETCH_WORD_RECEIVED,
  FETCH_WORD_ERROR,
  PRESS_KEY,
  END_THE_GAME,
  RESET_THE_GAME
} from './types';

export const fetchWord = () => dispatch => {
  dispatch({type: FETCH_WORD_REQUEST});

  fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=7&maxLength=-1&api_key=04upms5n04gk4rqvwxhhrz5d1zdb33g9r2vcl4n9j0d3u7mbs')
  .then(data => data.json())
  .then(wordObj => {
    dispatch({
      type: FETCH_WORD_RECEIVED,
      payload: wordObj.word.toUpperCase()
    })
  })
  .catch(err => {
    dispatch({
      type: FETCH_WORD_ERROR,
      payload: 'WRONGAPIKEY'
    })
  })
};

export const getLetter = () => dispatch => {
  document.onkeydown = function(e) {
    dispatch({
      type: PRESS_KEY,
      payload: e.key.toUpperCase()
    });
  }
}

export const endOfGame = (condition) => dispatch => {
  document.onkeydown = null;
  if(condition === 'lost') {
    dispatch({
      type: END_THE_GAME,
      payload: false
    });
  } else if(condition === 'win') {
    dispatch({
      type: END_THE_GAME,
      payload: true
    });
  }
}

export const resetTheGame = () => dispatch => {
  dispatch({
    type: RESET_THE_GAME
  })
}
