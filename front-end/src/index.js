import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// WHEN WERE READY FOR REDUX
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers/index';
// import reduxPromise from 'redux-promise';

ReactDOM.render(
        <App />,
    document.getElementById('root')
);

// WHEN WERE READY FOR REDUX
// const middleware = applyMiddleware(reduxPromise);
// const theStore = middleware(createStore);
// const stickyStore = theStore(reducers);

// ReactDOM.render(
//     <Provider store={stickyStore}> 
//         <App /> 
//     </Provider>,
//     document.getElementById('root')
// );

