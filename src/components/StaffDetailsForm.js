import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import uuid from 'uuid/v4';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import { FormGroup } from '@material-ui/core';
import {
    addStaffMember,
    removeStaffMember,
    updateStaffMember,
} from '../actions';

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0,0,0,.125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    },
    expanded: {
        margin: 'auto',
    },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0,0,0,.03)',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const StyledButton = styled(Button)`
    margin: 10px !important;
`;

const StaffDetailsForm = ({
    addStaffMember,
    removeStaffMember,
    updateStaffMember,
    staff,
}) => {
    const [staffObj, setValues] = useState({
        id: '',
        title: '',
        firstname: '',
        lastname: '',
    });
    const [updateStaffObj, UpdatesetValues] = useState({
        id: '',
        title: '',
        firstname: '',
        lastname: '',
    });

    const UpdatedValues = e => {
        UpdatesetValues({
            ...updateStaffObj,
            [e.target.name]: e.target.value,
        });
    };
    const [isExpanded, setPanelExpansion] = useState(false);
    const [updateWindow, setUpdateWindow] = useState(false);
    const [listid, setlistitemid] = useState('');
    const updateFields = e => {
        setValues({
            ...staffObj,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <ExpansionPanel
                expanded={isExpanded === 'panel'}
                onChange={() => {
                    if (isExpanded === 'panel') {
                        setPanelExpansion(false);
                    } else {
                        setPanelExpansion('panel');
                    }
                }}
            >
                <ExpansionPanelSummary>
                    <div>Staff Detail Form</div>
                </ExpansionPanelSummary>
                <Dialog open={updateWindow} fullWidth>
                    <DialogTitle id="form-dialog-title">
                        Update Staff Member Details
                    </DialogTitle>
                    <DialogContent>
                        <div>Enter the title:</div>
                        <TextField
                            id="outlined-title"
                            value={updateStaffObj.title}
                            onChange={UpdatedValues}
                            label="Title"
                            margin="normal"
                            variant="outlined"
                            name="title"
                        />
                        <br />
                        <div>Enter First Name:</div>
                        <TextField
                            id="outlined-name"
                            value={updateStaffObj.firstname}
                            onChange={UpdatedValues}
                            name="firstname"
                            margin="normal"
                            variant="outlined"
                            label="First Name"
                        />
                        <br />
                        <div>Enter Last Name:</div>
                        <TextField
                            id="outlined-name"
                            value={updateStaffObj.lastname}
                            onChange={UpdatedValues}
                            name="lastname"
                            margin="normal"
                            variant="outlined"
                            label="Last Name"
                        />
                        <br />
                        <br />
                    </DialogContent>
                    <DialogActions>
                        <StyledButton
                            onClick={() => {
                                setUpdateWindow(false);
                                setlistitemid('');
                            }}
                            color="primary"
                        >
                            Close
                        </StyledButton>
                        <StyledButton
                            onClick={() => {
                                updateStaffMember(
                                    listid,
                                    updateStaffObj.title,
                                    updateStaffObj.firstname,
                                    updateStaffObj.lastname
                                );
                                setUpdateWindow(false);
                                setlistitemid('');
                            }}
                            color="primary"
                        >
                            Update
                        </StyledButton>
                    </DialogActions>
                </Dialog>
                <div style={{ padding: '25px' }}>
                    <div>Enter New Staff Details:</div>
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
                        id="outlined-lastname"
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
                    <StyledButton
                        variant="contained"
                        color="primary"
                        disabled={
                            !(
                                staffObj.title.length > 0 &&
                                staffObj.firstname.length > 0 &&
                                staffObj.lastname.length > 0
                            )
                        }
                        onClick={() => {
                            console.log('Adding staff details:');
                            addStaffMember(
                                (staffObj.id = uuid()),
                                staffObj.title,
                                staffObj.firstname,
                                staffObj.lastname
                            );
                            setValues({
                                id: '',
                                title: '',
                                firstname: '',
                                lastname: '',
                            });
                        }}
                    >
                        ADD STAFF
                    </StyledButton>
                    <br />

                    <br />
                    <div>
                        <div> Staff Memebers Added Are: </div>
                        <FormGroup>
                            {staff.map(staffmembers => (
                                <FormControlLabel
                                    control={
                                        <Radio
                                            key={staffmembers.id}
                                            color="primary"
                                            checked={staffmembers.id === listid}
                                            value={staffmembers.id}
                                            onChange={event => {
                                                if (
                                                    event.target.checked ===
                                                    true
                                                ) {
                                                    console.log(
                                                        event.target.value
                                                    );
                                                    setlistitemid(
                                                        event.target.value
                                                    );
                                                    UpdatesetValues(
                                                        staff.filter(
                                                            i =>
                                                                i.id ===
                                                                event.target
                                                                    .value
                                                        )[0]
                                                    );
                                                } else {
                                                    setlistitemid('');
                                                }
                                            }}
                                        />
                                    }
                                    label={`${staffmembers.title} ${
                                        staffmembers.firstname
                                    } ${staffmembers.lastname}`}
                                    key={staffmembers.id}
                                />
                            ))}
                        </FormGroup>
                        <StyledButton
                            variant="contained"
                            color="primary"
                            disabled={!listid}
                            onClick={() => {
                                setUpdateWindow(true);
                            }}
                        >
                            UPDATE STAFF RECORD
                        </StyledButton>
                        <StyledButton
                            variant="contained"
                            color="secondary"
                            disabled={!listid}
                            onClick={() => {
                                removeStaffMember(listid);
                            }}
                        >
                            DELETE STAFF RECORD
                        </StyledButton>
                        <br />
                    </div>
                </div>
            </ExpansionPanel>
        </div>
    );
};

export default withRouter(
    connect(
        state => ({
            staff: state.staff,
        }),
        {
            addStaffMember,
            updateStaffMember,
            removeStaffMember,
        }
    )(StaffDetailsForm)
);
