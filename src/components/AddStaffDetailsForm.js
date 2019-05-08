import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import uuid from 'uuid/v4';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import {
    addStaffMember,
    removeStaffMember,
    updateStaffMember,
} from '../actions';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const AddStaffDetailsFormComponent = ({
    addStaffMember,
    removeStaffMember,
    updateStaffMember,
    staff,
}) => {
    const [staffObj, setValues] = useState({ id: '' });
    const [updateWindow, setUpdateWindow] = useState(false);
    const [listid, setlistitemid] = useState('');
    const updateFields = e => {
        setValues({
            ...staffObj,
            [e.target.name]: e.target.value,
        });
    };
    // console.log('NEW STAFF:', staffObj);
    return (
        <Container>
            <Dialog
                open={updateWindow}
                aria-labelledby="form-dialog-title"
                fullWidth
            >
                <DialogTitle id="form-dialog-title">
                    Update Staff Member Details
                </DialogTitle>
                <DialogContent>
                    <div>Enter the title:</div>
                    <TextField
                        id="outlined-title"
                        // label="Title"
                        value={staffObj.title}
                        onChange={updateFields}
                        name="title"
                        margin="normal"
                        variant="outlined"
                    />
                    <br />
                    <div>Enter First Name:</div>
                    <TextField
                        id="outlined-name"
                        // label="First Name"
                        value={staffObj.firstname}
                        onChange={updateFields}
                        name="firstname"
                        margin="normal"
                        variant="outlined"
                    />
                    <br />
                    <div>Enter Last Name:</div>
                    <TextField
                        id="outlined-name"
                        // label="Last Name"
                        value={staffObj.lastname}
                        onChange={updateFields}
                        name="lastname"
                        margin="normal"
                        variant="outlined"
                    />
                    <br />
                    <br />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setUpdateWindow(false);
                        }}
                        color="primary"
                    >
                        Close
                    </Button>
                    <Button
                        onClick={() => {
                            updateStaffMember(
                                listid,
                                staffObj.title,
                                staffObj.firstname,
                                staffObj.lastname
                            );
                            setUpdateWindow(false);
                        }}
                        color="primary"
                    >
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
            <Container>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        staff(staffObj);
                    }}
                >
                    <TextField
                        id="outlined-title"
                        label="Title"
                        value={staffObj.title}
                        onChange={updateFields}
                        name="title"
                        margin="normal"
                        variant="outlined"
                        required
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
                        required
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
                        required
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
                                (staffObj.id = uuid()),
                                staffObj.title,
                                staffObj.firstname,
                                staffObj.lastname
                            );
                            console.log('Staff Added!');
                        }}
                    >
                        ADD STAFF
                    </Button>
                    <br />
                    <br />
                </form>
            </Container>
            <Container>
                <div>List of Staff Members:</div>
                <List>
                    {staff.map(value => (
                        <ListItem key={value.id} dense button>
                            <Checkbox
                                tabIndex={-1}
                                disableRipple
                                onChange={event => {
                                    if (event.target.checked === true) {
                                        setlistitemid(value.id);
                                        console.log('list id: ', listid);
                                    } else {
                                        setlistitemid('');
                                    }
                                }}
                                value={value.id}
                            />
                            <ListItemText
                                primary={`${value.firstname} ${value.id}`}
                            />

                            <ListItemSecondaryAction>
                                <IconButton
                                    aria-label="Delete"
                                    onClick={() => {
                                        removeStaffMember(value.id);
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setUpdateWindow(true);
                    }}
                >
                    UPDATE DETAILS
                </Button>
                <br />
                <br />
            </Container>
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
            removeStaffMember,
            updateStaffMember,
        }
    )(AddStaffDetailsFormComponent)
);
