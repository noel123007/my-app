import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Getdata from './Getdata';
import * as serviceWorker from './serviceWorker';


const body = (
    <React.Fragment>
        <App />
        <Getdata />
    </React.Fragment>
)

ReactDOM.render(body, document.getElementById('root'));
//ReactDOM.render(<Getdata />, document.getElementById('test'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
