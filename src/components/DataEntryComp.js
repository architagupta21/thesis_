import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import uuid from 'uuid/v4';
import Grid from '@material-ui/core/Grid';
import DataEntryNewRow from './DataEntryNewRow';

const DataEntryComp = () => {
    const [newRow, setNewRow] = useState(false);
    const [updateSemester, setUpdateSemester] = useState('');
    const [updateCourseCode, setCourseCode] = useState('');
    const [updateStaff, setStaff] = useState('');
    const [updateSessionDate, setSessionDate] = useState('');
    const [updateCourseName, setCourseName] = useState('');
    const [updateNumberOfStudents, setNumberofStudents] = useState('');

    function renderNewRow() {
        if (newRow) {
            return (
                <div>
                    <DataEntryNewRow />
                </div>
            );
        }
        return null;
    }
    const DataEntryList = {
        semester: [{ value: 'Semester 1' }, { value: 'Semester 2' }],
        year: [
            { value: 2015 },
            { value: 2065 },
            { value: 2017 },
            { value: 2018 },
            { value: 2019 },
        ],
        coursecode: [
            { value: 'DECO7861' },
            { value: 'COMP7881' },
            { value: 'DECO7890' },
            { value: 'COMP5678' },
        ],
        teachingStaff: [
            { value: 'Mr. Hassan' },
            { value: 'Mr. Ankit' },
            { value: 'Ms. Helen' },
            { value: 'Mr. Hongxi' },
        ],
    };

    return (
        <div>
            <div>
                <TextField
                    select
                    label="Select Semester"
                    value={updateSemester}
                    onChange={event => {
                        setUpdateSemester(event.target.value);
                    }}
                    margin="normal"
                    variant="outlined"
                    style={{ marginRight: '25px', width: '33%' }}
                >
                    {DataEntryList.semester.map(val => (
                        <MenuItem value={val.value} key={uuid()}>
                            {val.value}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2019-06-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <TextField
                    select
                    label="Select Course Code"
                    value={updateCourseCode}
                    onChange={event => {
                        setCourseCode(event.target.value);
                    }}
                    margin="normal"
                    variant="outlined"
                    style={{ marginRight: '25px', width: '33%' }}
                >
                    {DataEntryList.coursecode.map(val => (
                        <MenuItem value={val.value} key={uuid()}>
                            {val.value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Course Name"
                    type="name"
                    value={updateCourseName}
                    autoComplete="Course Name"
                    margin="normal"
                    variant="outlined"
                    style={{ margin: '10px' }}
                    onChange={event => {
                        setCourseName(event.target.value);
                    }}
                />
                <br />
                <TextField
                    select
                    label="Select Staff "
                    value={updateStaff}
                    onChange={event => {
                        setStaff(event.target.value);
                    }}
                    margin="normal"
                    variant="outlined"
                    style={{ marginRight: '25px', width: '33%' }}
                >
                    {DataEntryList.teachingStaff.map(val => (
                        <MenuItem value={val.value} key={uuid()}>
                            {val.value}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="Location Details"
                    type="name"
                    value="Location Details"
                    margin="normal"
                    variant="outlined"
                    style={{ margin: '10px' }}
                />
                <br />

                <TextField
                    label="Number of Students"
                    type="name"
                    value={updateNumberOfStudents}
                    margin="normal"
                    variant="outlined"
                    style={{ margin: '10px' }}
                    onChange={event => {
                        setNumberofStudents(event.target.value);
                    }}
                />
                <br />
                <br />

                <Button
                    onClick={() => {
                        document
                            .getElementById('obsPanel')
                            .removeAttribute('hidden');
                    }}
                    color="primary"
                    variant="contained"
                >
                    Start Recording Observations
                </Button>
            </div>

            <div hidden id="obsPanel">
                <TextField
                    label="Field1"
                    type="email"
                    name="email"
                    margin="normal"
                    variant="outlined"
                    style={{ margin: '10px' }}
                />
                <TextField
                    label="Field3"
                    type="email"
                    name="email"
                    margin="normal"
                    variant="outlined"
                    style={{ margin: '10px' }}
                />
                <TextField
                    label="Field4"
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    style={{ margin: '10px' }}
                    onBlur={() => {
                        if (newRow === false) {
                            setNewRow(true);
                        }
                    }}
                />
                {renderNewRow()}
                {console.log('bool new row', newRow)}
            </div>
        </div>
    );
};
export default withRouter(
    connect(state => ({
        save: state.save,
    }))(DataEntryComp)
);

DataEntryComp.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
