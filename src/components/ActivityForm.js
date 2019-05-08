import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import uuid from 'uuid/v4';
import { addActivity, removeActivity, updateActivity } from '../actions';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const ActivityForm = ({
    activities,
    addActivity,
    removeActivity,
    updateActivity,
}) => {
    const [activityName, setActivityName] = useState('');
    const [staffActivity, setStaffActivity] = useState(false);
    const [studentActivity, setStudentActivity] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [updateWindow, setUpdateWindow] = useState(false);
    const [updateActivityName, setUpdateActivityName] = useState('');
    const [updateStaffActivity, setUpdateStaffActivity] = useState(false);
    const [updateStudentActivity, setUpdateStudentActivity] = useState(false);

    const staffActivities = activities.filter(type => type.staff);
    const studentActivities = activities.filter(type => type.student);
    const unassignedActivities = activities.filter(
        type => type.staff === false && type.student === false
    );

    console.log('MY ACTIVITY:', activities);

    return (
        <Container>
            <Dialog
                open={updateWindow}
                aria-labelledby="form-dialog-title"
                fullWidth
            >
                <DialogTitle id="form-dialog-title">
                    Update Activity
                </DialogTitle>
                <DialogContent>
                    <TextField
                        label="Activity Name"
                        value={updateActivityName}
                        onChange={event => {
                            setUpdateActivityName(event.target.value);
                        }}
                        fullWidth
                    />
                    <FormControl
                        onChange={event => {
                            if (
                                event.target.value === 'staff' &&
                                event.target.checked === true
                            ) {
                                setUpdateStaffActivity(true);
                            }
                            if (
                                event.target.value === 'student' &&
                                event.target.checked === true
                            ) {
                                setUpdateStudentActivity(true);
                            }
                            if (
                                event.target.value === 'staff' &&
                                event.target.checked === false
                            ) {
                                setUpdateStaffActivity(false);
                            }
                            if (
                                event.target.value === 'student' &&
                                event.target.checked === false
                            ) {
                                setUpdateStudentActivity(false);
                            }
                        }}
                    >
                        <FormControlLabel
                            value="staff"
                            control={<Checkbox />}
                            label="Staff"
                            checked={updateStaffActivity}
                        />
                        <FormControlLabel
                            value="student"
                            control={<Checkbox />}
                            label="Student"
                            checked={updateStudentActivity}
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setUpdateWindow(false);
                            setSelectedId('');
                        }}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            updateActivity(
                                selectedId,
                                updateActivityName,
                                updateStaffActivity,
                                updateStudentActivity
                            );
                            setUpdateWindow(false);
                            setSelectedId('');
                        }}
                        color="primary"
                    >
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
            <TextField
                label="New Activity"
                onChange={event => {
                    setActivityName(event.target.value);
                }}
                margin="normal"
                variant="outlined"
                value={activityName}
                fullWidth
            />
            <br />
            <FormControl
                onChange={event => {
                    if (
                        event.target.value === 'staff' &&
                        event.target.checked === true
                    ) {
                        setStaffActivity(true);
                        console.log('new test');
                    }
                    if (
                        event.target.value === 'student' &&
                        event.target.checked === true
                    ) {
                        setStudentActivity(true);
                        console.log('new test 2');
                    }
                    if (
                        event.target.value === 'staff' &&
                        event.target.checked === false
                    ) {
                        setStaffActivity(false);
                    }
                    if (
                        event.target.value === 'student' &&
                        event.target.checked === false
                    ) {
                        setStudentActivity(false);
                    }
                }}
            >
                <FormControlLabel
                    value="staff"
                    control={<Checkbox />}
                    label="Staff"
                    checked={staffActivity}
                />
                <FormControlLabel
                    value="student"
                    control={<Checkbox />}
                    label="Student"
                    checked={studentActivity}
                />
            </FormControl>
            <br />
            <Button
                variant="contained"
                color="secondary"
                disabled={!activityName}
                onClick={() => {
                    addActivity(
                        uuid(),
                        activityName,
                        staffActivity,
                        studentActivity
                    );
                    setActivityName('');
                    setStaffActivity(false);
                    setStudentActivity(false);
                }}
            >
                ADD ACTIVITY
            </Button>
            <br />
            <br />
            <Container>
                <div>Current Staff Activities:</div>
                {staffActivities.map(item => (
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={item.id === selectedId}
                                    onChange={event => {
                                        if (event.target.checked === true) {
                                            setSelectedId(event.target.value);
                                            setUpdateActivityName(
                                                activities.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].name
                                            );
                                            setUpdateStaffActivity(
                                                activities.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].staff
                                            );
                                            setUpdateStudentActivity(
                                                activities.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].student
                                            );
                                        } else {
                                            setSelectedId('');
                                        }
                                    }}
                                    value={item.id}
                                />
                            }
                            label={item.name}
                        />
                    </FormGroup>
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    disabled={
                        !(
                            selectedId &&
                            staffActivities.filter(e => e.id === selectedId)
                                .length > 0
                        )
                    }
                    onClick={() => {
                        setUpdateWindow(true);
                    }}
                >
                    UPDATE ACTIVITY
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={
                        !(
                            selectedId &&
                            staffActivities.filter(e => e.id === selectedId)
                                .length > 0
                        )
                    }
                    onClick={() => {
                        removeActivity(selectedId);
                    }}
                >
                    DELETE ACTIVITY
                </Button>
            </Container>
            <Container>
                <div>Current Student Activities:</div>
                {studentActivities.map(item => (
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={item.id === selectedId}
                                    onChange={event => {
                                        if (event.target.checked === true) {
                                            setSelectedId(event.target.value);
                                            setUpdateActivityName(
                                                activities.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].name
                                            );
                                            setUpdateStaffActivity(
                                                activities.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].staff
                                            );
                                            setUpdateStudentActivity(
                                                activities.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].student
                                            );
                                        } else {
                                            setSelectedId('');
                                        }
                                    }}
                                    value={item.id}
                                />
                            }
                            label={item.name}
                        />
                    </FormGroup>
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    disabled={
                        !(
                            selectedId &&
                            studentActivities.filter(e => e.id === selectedId)
                                .length > 0
                        )
                    }
                    onClick={() => {
                        setUpdateWindow(true);
                    }}
                >
                    UPDATE ACTIVITY
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={
                        !(
                            selectedId &&
                            studentActivities.filter(e => e.id === selectedId)
                                .length > 0
                        )
                    }
                    onClick={() => {
                        removeActivity(selectedId);
                    }}
                >
                    DELETE ACTIVITY
                </Button>
            </Container>
            <Container>
                <div>Unassigned Activities:</div>
                {unassignedActivities.map(item => (
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={item.id === selectedId}
                                    onChange={event => {
                                        if (event.target.checked === true) {
                                            setSelectedId(event.target.value);
                                            setUpdateActivityName(
                                                activities.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].name
                                            );
                                            setUpdateStaffActivity(
                                                activities.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].staff
                                            );
                                            setUpdateStudentActivity(
                                                activities.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].student
                                            );
                                        } else {
                                            setSelectedId('');
                                        }
                                    }}
                                    value={item.id}
                                />
                            }
                            label={item.name}
                        />
                    </FormGroup>
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    disabled={
                        !(
                            selectedId &&
                            unassignedActivities.filter(
                                e => e.id === selectedId
                            ).length > 0
                        )
                    }
                    onClick={() => {
                        setUpdateWindow(true);
                    }}
                >
                    UPDATE ACTIVITY
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={
                        !(
                            selectedId &&
                            unassignedActivities.filter(
                                e => e.id === selectedId
                            ).length > 0
                        )
                    }
                    onClick={() => {
                        removeActivity(selectedId);
                    }}
                >
                    DELETE ACTIVITY
                </Button>
            </Container>
        </Container>
    );
};

export default withRouter(
    connect(
        state => ({
            activities: state.activities,
        }),
        {
            addActivity,
            removeActivity,
            updateActivity,
        }
    )(ActivityForm)
);

ActivityForm.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
