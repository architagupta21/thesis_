import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import uuid from 'uuid/v4';
import ActivityForm from '../components/ActivityForm';
import ProgramForm from '../components/ProgramForm';
import CourseForm from '../components/CourseForm';
import { setCountDefault, setSaveFalse, addStaffMember } from '../actions';
import StaffDetailsForm from '../components/StaffDetailsForm';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
    font-family: monospace;
    font-size: large;
`;

const DefaultCountInput = styled.input`
    margin-left: 10px;
`;

const Admin = ({ staff }) => {
    // const [defaultCount, setDefaultCount] = useState(defaultCountFromRedux);
    console.log('MY STAFF:', staff);

    return (
        <Container>
            <ActivityForm />
            <br />
            <ProgramForm />
            <br />
            <CourseForm />
            <br />
            <StaffDetailsForm />
            <br />
            <br />
            <br />
            <Button
                style={{ marginLeft: '70%' }}
                color="primary"
                href="#/observation"
                variant="contained"
            >
                Start Recording Observations
            </Button>
        </Container>
    );
};
export default withRouter(
    connect(
        state => ({
            save: state.save,
            defaultCountFromRedux: state.defaultCount,
            staff: state.staff,
        }),
        {
            setCountDefault,
            setSaveFalse,
            addStaffMember,
        }
    )(Admin)
);

Admin.propTypes = {
    // defaultCountFromRedux: PropTypes.number.isRequired,
    // setCountDefault: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired,
};
