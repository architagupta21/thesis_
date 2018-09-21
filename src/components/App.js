import React from 'react';
import styled from 'styled-components';

import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Counter from './Counter';

const AppContainer = styled.div`
    padding: 50px;

    border: 1px solid lightgrey;
`;

const AppTitle = styled.div`
    font-weight: bold;

    font-size: 20px;
`;

const TestAPIButton = styled.button`
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;

const App = () => (
    <AppContainer>
        <AppTitle>
            Hello LTI <FontAwesomeIcon icon={['fab', 'react']} />
            React App!
            <FontAwesomeIcon icon={['fas', 'cog']} />
        </AppTitle>
        <p>
            Open <FontAwesomeIcon icon="cog" /> Developer Tools to see log
            outputs on state changesu
        </p>

        <TestAPIButton
            type="button"
            onClick={() => {
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
                        filter: 'posts.title,eq,A post by Tony',
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
        >
            Test API
        </TestAPIButton>

        <h4>
            <FontAwesomeIcon icon="store" /> Redux Example
        </h4>
        <Counter />
    </AppContainer>
);

export default withRouter(App);
