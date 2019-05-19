import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ReactDOM } from 'react-dom';

// import { ResponsiveNetwork } from '@nivo/network';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;
const Analysis = () => <Container />;

// ReactDOM.render(<Analysis />, mountNode);

export default withRouter(
    connect(state => ({
        save: state.save,
    }))(Analysis)
);

Analysis.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
