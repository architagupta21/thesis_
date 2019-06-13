import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ObservationForm from '../components/ObservationForm';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const Observation = () => <ObservationForm />;

export default withRouter(
    connect(state => ({
        save: state.save,
    }))(Observation)
);

Observation.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
