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
`;

const DefaultCountInput = styled.input`
    margin-left: 10px;
`;

const Admin = ({ staff }) => {
    // const [defaultCount, setDefaultCount] = useState(defaultCountFromRedux);
    console.log('MY STAFF:', staff);

    return (
        <Container>
            {/* Default Count Value:
            <DefaultCountInput
                type="number"
                value={defaultCount}
                onChange={event => {
                    setDefaultCount(event.target.value);
                }}
            />
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        console.log('I WANT TO SAVE');
                        setCountDefault(parseInt(defaultCount, 10));
                        history.push('/');
                    }}
                >
                    Save Changes
                </Button>
            </div> */}
            {/* {staff.map(person => (
                <div>{<div>{person.firstname}</div>}</div>
            ))} */}
            {/* <br />
            <br />
            <br /> */}
            {/* {staff.map(person => (
                <div>
                    <div>{person.id}</div>
                </div>
            ))}
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    console.log('ADD STAFF BUTTOn');
                    addStaffMember(uuid(), 'prof', 'random', 'person');
                }}
            >
                ADD RANDOM STAFF
            </Button> */}
            <ActivityForm />
            <ProgramForm />
            <CourseForm />
            <StaffDetailsForm />
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
