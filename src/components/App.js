import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Counter from './Counter';

const AppContainer = styled.div`
    border: 1px solid lightgrey;
    padding: 50px;
`;

const AppTitle = styled.div`
    font-weight: bold;
    font-size: 25px;
`;

const APIButtonMessage = styled.div``;

const APIButton = styled.button``;

const APIButtonComponent = ({ onClick }) => (
    <APIButton type="button" onClick={onClick}>
        Test API
    </APIButton>
);

APIButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const App = props => {
    const { phpMessage, dbPost, count } = props;
    return (
        <AppContainer>
            <AppTitle>
                Hello COPUS
                {/* <FontAwesomeIcon icon={['fab', 'react']} /> */}
            </AppTitle>
            {/* <p>
                Open <FontAwesomeIcon icon="cog" /> Developer Tools to see log
                outputs on state change
            </p>
            <APIButtonMessage>
                Ensure that you have created the sample database and tables to
                test the API button below, Use developer tools to see output.
            </APIButtonMessage>
            <APIButtonComponent
                onClick={() => {
                    // Example of how to use axios without redux middleware
                    axios({
                        method: 'get',
                        url: '../public/api/api.php',
                        params: {
                            action: 'hello',
                            jwt_token: $JWT_TOKEN,
                            data: {
                                name: $LTI.userID,
                            },
                        },
                    })
                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => {
                            console.log(error);
                        });

                    axios({
                        method: 'get',
                        url: '../public/api/crud.php/posts', // test with posts table
                        params: {
                            jwt_token: $JWT_TOKEN,
                            filter: 'posts.title,eq,A post by Will',
                            transform: 1,
                        },
                    })
                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }}
            />
            <h4>
                <FontAwesomeIcon icon="store" /> Redux Example
            </h4>
            <h5>PHP MESSAGE: {phpMessage}</h5>
            <p>DB POST: {dbPost}</p>
            <h5>COUNTER EXAMPLE</h5>
            <p>APP COMPONENT: {count}</p>
            COUNTER COMPONENT: <Counter /> */}
        </AppContainer>
    );
};

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
