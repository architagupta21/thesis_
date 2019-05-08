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

const AddStaffDetailsFormComponent = ({ addStaffMember }) => {
    const [staffObj, setValues] = useState({
        firstname: '',
        lastname: '',
        title: '',
    });

    const updateFields = e => {
        setValues({
            ...staffObj,
            [e.target.name]: e.target.value,
        });
    };

    console.log('NEW STAFF:', staffObj);
    return (
        <Container>
            <form>
                <TextField
                    id="outlined-title"
                    label="Title"
                    value={staffObj.title}
                    onChange={updateFields}
                    name="title"
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-name"
                    label="First Name"
                    value={staffObj.firstname}
                    onChange={updateFields}
                    name="firstname"
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-name"
                    label="Last Name"
                    value={staffObj.lastname}
                    onChange={updateFields}
                    name="lastname"
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
