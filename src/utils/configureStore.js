import { configureStore } from '@reduxjs/toolkit'
import { combineReducers} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import imipqr from '../redux/reducers/imipqr';
import provaEpic from '../redux/epic/imipqr';
  const rootReducer = combineReducers({imipqr})

  const epicMiddleware = createEpicMiddleware();
                          //   MIDDELWARE
const logger = store => (next) => {
    if (!console.group) {
      return next;
    }
    return (action) => {
      console.group(action.type);
      console.log('%c prev state', 'color: gray', store.getState());
      console.log('%c action', 'color: blue', action);
      const returnValue = next(action);
      console.log('%c next state', 'color: green', store.getState());
      console.groupEnd(action.type);
      return returnValue;
    };
  };

const store = configureStore({
    reducer: rootReducer, middleware: [logger, epicMiddleware]
    
})
epicMiddleware.run(provaEpic);

export default store