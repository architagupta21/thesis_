import React from 'react';
import styled from 'styled-components';

import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Counter from './Counter';

const AppContainer = styled.div`
    border: 1px solid lightgrey;
    padding: 50px;
`;

const App = () => (
    <AppContainer>
        <h2>
            Hello LTI <FontAwesomeIcon icon={['fab', 'react']} />
            React App!
        </h2>
        <p>
            Open <FontAwesomeIcon icon="cog" /> Developer Tools to see log
            outputs on state change
        </p>

        <button
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
        >
            Test API
        </button>
        <h4>
            <FontAwesomeIcon icon="store" /> Redux Example
        </h4>
        <Counter />
    </AppContainer>
);

export default withRouter(App);
