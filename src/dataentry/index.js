import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import DataEntryComp from '../components/DataEntryComp';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;
const DataEntry = () => {
    console.log('data entry begins..');
    return (
        <Container>
            <div>Hello there!</div>
            <DataEntryComp />
        </Container>
    );
};
export default withRouter(
    connect(state => ({
        save: state.save,
    }))(DataEntry)
);

DataEntry.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
