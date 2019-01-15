import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCog, faStore } from '@fortawesome/free-solid-svg-icons';
import store from './store';
import App from './components/App';
import DataAnalysisPage from './components/DataAnalysisPage';
import DataEntryPage from './components/DataEntryPage';
import MainPage from './components/MainPage';

import SettingsPage from './settings';
import { getPHPMessage, getDBPost } from './actions';

library.add(faReact, faCog, faStore);

const renderApp = (noError = true) =>
    !noError ? (
        'Something Went Wrong'
    ) : (
        <Provider store={store}>
            <Router>
                <App>
                    <Switch>
                        <Route
                            path="/settings"
                            render={props => <SettingsPage {...props} />}
                        />
                        <Route
                            path="/dataentry"
                            render={props => <DataEntryPage {...props} />}
                        />
                        <Route
                            path="/analytics"
                            render={props => <DataAnalysisPage {...props} />}
                        />
                        <Route
                            path="/"
                            render={props => <MainPage {...props} />}
                        />
                    </Switch>
                </App>
            </Router>
        </Provider>
    );

/* Disable Activity when in studio view 
(edX studio view sets userID as 'student') 
as course ID is different in edX Live View */
if ($LTI.userID === 'student') {
    const divStyle = {
        textAlign: 'center',
        paddingTop: '100px',
    };
    ReactDOM.render(
        <div style={divStyle}>
            <h2>Please Author This Activity In Live View</h2>
        </div>,
        document.getElementById('app')
    );
} else {
    /* 

    // Use this method if one action depends on the other
    store
        .dispatch(getPHPMessage())
        .then(() => store.dispatch(getDBPost()))
        .then(response => {
            console.log(response); // I can either check to see if the type of the response is success OR
            console.log(store.getState()); // i can check if the state variable has been correctly updated.
            ReactDOM.render(renderApp(), document.getElementById('app'));
        })
        .catch(error => {
            console.log(error); // don't render app if there has been an error in fetching or generating data etc.
            ReactDOM.render(renderApp(false), document.getElementById('app'));
        }); 
    */

    // this method can be used to resolve multiple promises before redering the app
    Promise.all([store.dispatch(getPHPMessage()), store.dispatch(getDBPost())])
        .then(response => {
            console.log(response);
            /* 
            response ->

            0: {type: "GET_PHP_MESSAGE_SUCCESS", payload: {…}, meta: {…}}
            1: {type: "GET_DB_POST_SUCCESS", payload: {…}, meta: {…}} 
        */
            console.log(store.getState());
            ReactDOM.render(renderApp(), document.getElementById('app'));
        })
        .catch(error => {
            console.log(error); // don't render app if there has been an error in fetching or generating data etc.
            ReactDOM.render(renderApp(false), document.getElementById('app'));
        });
}
