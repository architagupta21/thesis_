import axios from 'axios';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Counter from './Counter';

interface APIButtonComponentProps {
    onClick: () => void;
}

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

const APIButtonComponent = ({ onClick }: APIButtonComponentProps) => (
    <APIButton type="button" onClick={onClick}>
        Test API
    </APIButton>
);

const HandleAPIButtonComponentOnClick = () => {
    const a = { red: 'green', blue: 'orange' };
    const b = { ...a, blue: 'red' };
    console.log(b);
    axios({
        method: 'get',
        params: {
            action: 'hello',
            data: {
                name: $LTI.userID,
            },
            jwt_token: $JWT_TOKEN,
        },
        url: '../public/api/api.php',
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

    axios({
        method: 'get',
        params: {
            filter: 'posts.title,eq,A post by Will',

            jwt_token: $JWT_TOKEN,
            transform: 1,
        },
        url: '../public/api/crud.php/posts', // test with posts table
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};

const App = () => (
    <AppContainer>
        <AppTitle>
            Hello LTI
            <FontAwesomeIcon icon={['fab', 'react']} />
            React App!
        </AppTitle>
        <p>
            Open <FontAwesomeIcon icon="cog" /> Developer Tools to see log
            outputs on state change
        </p>

        <APIButtonMessage>
            Ensure that you have created the sample database and tables to test
            the API button below, Use developer tools to see output.
        </APIButtonMessage>
        <APIButtonComponent onClick={HandleAPIButtonComponentOnClick} />
        <h4>
            <FontAwesomeIcon icon="store" /> Redux Example
        </h4>
        <Counter />
    </AppContainer>
);

export { APIButtonComponent };

export default withRouter(App);
