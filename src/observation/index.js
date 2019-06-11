import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    border: 1px solid red;
`;

const Observation = () => <Container />;

export default withRouter(
    connect(state => ({
        save: state.save,
    }))(Observation)
);

Observation.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
