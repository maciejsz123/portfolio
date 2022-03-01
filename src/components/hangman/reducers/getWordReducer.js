import { FETCH_WORD_REQUEST,
  FETCH_WORD_RECEIVED,
  FETCH_WORD_ERROR,
  PRESS_KEY,
  END_THE_GAME,
  RESET_THE_GAME } from '../actions/types';

const initialState = {
  word: '',
  letters: [],
  wrongLetters: [],
  win: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_WORD_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_WORD_RECEIVED:
      return {
        ...state,
        pending: false,
        word: action.payload
      }
    case FETCH_WORD_ERROR:
      return {
        ...state,
        pending: false,
        word: action.error
      }
    case PRESS_KEY:
      if(state.letters.includes(action.payload) || state.wrongLetters.includes(action.payload)) {
        return state;
      }
      else if(/^[a-z]{1}$/i.test(action.payload) && !Array.from(state.word).includes(action.payload)) {
        return {
          ...state,
          wrongLetters: [...state.wrongLetters, action.payload]
        }
      }
      return {
        ...state,
        letters: [...state.letters, action.payload]
      }
    case END_THE_GAME:
      return {
        ...state,
        win: action.payload
      }
    case RESET_THE_GAME:
      return {
        ...state,
        word: '',
        letters: [],
        wrongLetters: [],
        win: ''
      }
    default:
      return state;
  }
}
