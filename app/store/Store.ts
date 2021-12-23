import { createStore, combineReducers } from 'redux';
import characterReducer from './reducer/CharacterReducer';
const rootReducer = combineReducers(
{ character: characterReducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;
