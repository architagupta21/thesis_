import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import ObservationForm from '../components/ObservationForm';

const Observation = () => (
    <div>
        <ObservationForm />
        <br />
        <Button
            style={{ marginLeft: '85%' }}
            color="primary"
            href="#/analysis"
            variant="contained"
        >
            View Analysis
        </Button>
    </div>
);

export default withRouter(
    connect(state => ({
        save: state.save,
    }))(Observation)
);

Observation.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
