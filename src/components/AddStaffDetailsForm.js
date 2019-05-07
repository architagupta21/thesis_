import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import uuid from 'uuid/v4';
import TextField from '@material-ui/core/TextField';
import { addStaffMember } from '../actions';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const obj = {
    firstname: '',
    lastname: '',
    title: '',
};
const AddStaffDetailsFormComponent = ({ addStaffMember, staff }) => {
    const [staffObj = obj] = useState();
    console.log('MY STAFF:', staff);
    return (
        <Container>
            <form>
                <TextField
                    id="outlined-name"
                    label="Title"
                    onChange={event => {
                        staffObj.title = event.target.value;
                    }}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-name"
                    label="First Name"
                    onChange={event => {
                        staffObj.firstname = event.target.value;
                    }}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-name"
                    label="Last Name"
                    onChange={event => {
                        staffObj.lastname = event.target.value;
                    }}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <br />
                <br />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        console.log('Adding staff details:');
                        addStaffMember(
                            uuid(),
                            staffObj.title,
                            staffObj.firstname,
                            staffObj.lastname
                        );
                    }}
                >
                    ADD STAFF
                </Button>
            </form>
        </Container>
    );
};

export default withRouter(
    connect(
        state => ({
            save: state.save,
            staff: state.staff,
        }),
        {
            addStaffMember,
        }
    )(AddStaffDetailsFormComponent)
);
AddStaffDetailsFormComponent.propTypes = {
    history: PropTypes.shape({}).isRequired,
    staff: PropTypes.shape({}).isRequired,
};
