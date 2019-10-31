import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppContainer = styled.div`
    border: 1px solid lightgrey;
    padding: 50px;
`;

const AppTitle = styled.div`
    font-weight: bold;
    font-size: 25px;
`;

const APIButton = styled.button``;

const APIButtonComponent = ({ onClick }) => (
    <APIButton type="button" onClick={onClick}>
        Test API
    </APIButton>
);

APIButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const onSettingClick = e => {
    // e.preventFefault();
    window.location = '../src/admin';
};

const App = props => (
    <AppContainer>
        <AppTitle style={{ textAlign: 'center' }}>
            Welcome to the COPUS tool
            {/* <FontAwesomeIcon icon={['fab', 'react']} />
                React App! */}
        </AppTitle>
        <p>
            <div
                style={{
                    margin: '15px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}
            >
                <FontAwesomeIcon icon="cog" /> Please Use the Settings tab to
                Update records for new Information
                {/* <FontAwesomeIcon icon="cog" /> */}
            </div>
            <div
                style={{
                    margin: '15px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}
            >
                <FontAwesomeIcon icon="cog" /> Please Use the Data Entry tab to
                Enter records for new Class Observation
                {/* <FontAwesomeIcon icon="cog" /> */}
            </div>
            <div
                style={{
                    margin: '15px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}
            >
                <FontAwesomeIcon icon="cog" /> Please Use the Analysis tab to
                Visually analyse the observations recorded
                {/* <FontAwesomeIcon icon="cog" /> */}
            </div>
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <a href="#/edit">
                {/* Click Me */}
                <img
                    src="assets/settingsIcon.png"
                    height="300px"
                    width="300px"
                    alt="settings_icon"
                    style={{ margin: '25px' }}
                    title="Edit Settings"
                    // placeholder="Go To Settings Page"
                    // onClick={onSettingClick()}
                />
            </a>
            <a href="#/observation">
                <img
                    src="assets/data-entry-icon-24.jpg"
                    height="300px"
                    width="300px"
                    alt="dataentry_icon"
                    style={{ margin: '25px', marginLeft: '10px' }}
                    title="Start Observations"
                />
            </a>
            <a href="#/analysis">
                <img
                    src="assets/userDataAnalysis.png"
                    height="300px"
                    width="300px"
                    alt="analysis_icon"
                    title="View Analysis"
                    style={{ margin: '25px', marginLeft: '10px' }}
                />
            </a>
        </div>
        <h4>
            <div style={{ textAlign: 'center' }}>
                <FontAwesomeIcon icon="store" />
                Use the tool to analyse classroom analytics by studying
                engagement levels of students and staff members.
            </div>
        </h4>
    </AppContainer>
);

export { APIButtonComponent };

export default withRouter(
    connect(
        state => ({
            phpMessage: state.phpMessage,
            dbPost: state.dbPost,
            count: state.count,
        }),
        {}
    )(App)
);

App.propTypes = {
    phpMessage: PropTypes.string,
    dbPost: PropTypes.string,
    count: PropTypes.number,
};

App.defaultProps = {
    count: 0,
    phpMessage: '',
    dbPost: '',
};
