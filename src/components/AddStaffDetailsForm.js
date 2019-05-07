import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import uuid from 'uuid/v4';
import TextField from '@material-ui/core/TextField';
import { addStaffMember } from '../actions';
import { Record } from 'immutable';

class AddStaffDetailsForm extends Component{
    
}

const staffObj = {
    fname: '',
    lname: '',
    title: '',
};

const onFNameChange = event => {
    staffObj.fname = event.target.value;
};

const onLNameChange = event => {
    staffObj.lname = event.target.value;
};

const onTitleChange = event => {
    staffObj.title = event.target.value;
};

const AddStaffDetailsForm=()=>{
return(
    <Container>
        <form>
                <TextField
                    id="outlined-name"
                    label="Title"
                    onChange={onTitleChange}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-name"
                    label="First Name"
                    onChange={onFNameChange}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-name"
                    label="Last Name"
                    onChange={onLNameChange}
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
                            staffObj.fname,
                            staffObj.lname
                        );
                    }}
                >
                    ADD STAFF
                </Button>
            </form>
            }
    </Container>
)

export default AddStaffDetailsForm;