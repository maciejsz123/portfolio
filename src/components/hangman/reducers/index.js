import { combineReducers } from 'redux';
import getWordRecuder from './getWordReducer';

export default combineReducers({
  word: getWordRecuder
});
