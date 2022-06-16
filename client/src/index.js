import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import StudyStore from "./store/StudyStore";
import StatisticsStore from './store/StatisticsStore'
import TestStore from "./store/TestStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
        user: new UserStore(),
        study: new StudyStore(),
        statistics: new StatisticsStore(),
        tests: new TestStore()
    }}>
        <App />
    </Context.Provider>,
);

