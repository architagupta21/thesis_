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
    padding: 10px;
`;

const AppTitle = styled.div`
    font-weight: bold;
    font-size: 25px;
`;

const APIButtonMessage = styled.div``;

const APIButton = styled.button``;

const CopusHelloContainer = styled.div`
    font-size: 50px;
`;

const APIButtonComponent = ({ onClick }) => (
    <APIButton type="button" onClick={onClick}>
        Test API
    </APIButton>
);

APIButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const { programExists, history } = this.props;

        console.log('Component did mount: ', programExists);

        // redirect to program create page.

        if (!programExists) {
            history.push('/createprogram');
        }
    }

    render() {
        console.log('App Props: ', this.props);

        return <AppContainer> This is the main App page</AppContainer>;
    }
}

export { APIButtonComponent };

export default withRouter(
    connect(
        state => {
            const { programExists } = state;
            return {
                programExists,
            };
        },
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
