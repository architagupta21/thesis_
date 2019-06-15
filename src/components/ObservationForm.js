import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import uuid from 'uuid/v4';
import { addObservation } from '../actions';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const Observation = ({
    observations,
    courses,
    staff,
    activities,
    addObservation,
}) => {
    const [semester, setSemester] = useState('');
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    const [selectedCourseID, setSelectedCourseID] = useState('');
    const [selectedStaffID, setSelectedStaffID] = useState('');
    const [location, setLocation] = useState('');
    const [numberOfStudents, setNumberofStudents] = useState('');
    const [duration, setDuration] = useState('');
    const [records, setRecords] = useState([]);
    const [refreshRecord, setRefreshRecord] = useState('');

    const courseFiltered = courses.filter(
        course => course.id === selectedCourseID
    );
    const staffFiltered = staff.filter(staff => staff.id === selectedStaffID);

    const selectedCourse = courseFiltered.length > 0 ? courseFiltered[0] : {};
    const selectedStaff = staffFiltered.length > 0 ? staffFiltered[0] : {};

    console.log(observations);

    return (
        <div>
            <Container>
                <div>Class Session Information:</div>
                <TextField
                    select
                    label="Select Semester"
                    value={semester}
                    onChange={event => {
                        setSemester(event.target.value);
                    }}
                    margin="normal"
                    variant="outlined"
                    style={{ marginRight: '25px', width: '35%' }}
                >
                    <MenuItem value="Semester 1">Semester 1</MenuItem>
                    <MenuItem value="Semester 2">Semester 2</MenuItem>
                </TextField>
                <TextField
                    label="Date"
                    type="date"
                    value={date}
                    onChange={event => {
                        setDate(event.target.value);
                    }}
                />
                <br />
                <TextField
                    select
                    label="Select Course Code"
                    value={selectedCourseID}
                    onChange={event => {
                        setSelectedCourseID(event.target.value);
                    }}
                    margin="normal"
                    variant="outlined"
                    style={{ marginRight: '25px', width: '35%' }}
                >
                    {courses.map(item => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.code}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Course Name"
                    type="name"
                    value={selectedCourse.name || ''}
                    margin="normal"
                    variant="outlined"
                    style={{ width: '35%' }}
                />
                <br />
                <TextField
                    select
                    label="Select Instructor"
                    value={selectedStaffID}
                    onChange={event => {
                        setSelectedStaffID(event.target.value);
                    }}
                    margin="normal"
                    variant="outlined"
                    style={{ marginRight: '25px', width: '35%' }}
                >
                    {staff.map(item => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.title} {item.firstname} {item.lastname}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Location"
                    type="name"
                    value={location}
                    margin="normal"
                    variant="outlined"
                    placeholder="413 Learning Innovation Building"
                    style={{ width: '35%' }}
                    onChange={event => {
                        setLocation(event.target.value);
                    }}
                />
                <br />
                <TextField
                    label="Number of Students"
                    type="number"
                    value={numberOfStudents}
                    margin="normal"
                    variant="outlined"
                    style={{ marginRight: '25px', width: '35%' }}
                    onChange={event => {
                        setNumberofStudents(event.target.value);
                    }}
                />
                <TextField
                    label="Duration(mins)"
                    type="number"
                    value={duration}
                    margin="normal"
                    variant="outlined"
                    style={{ marginRight: '25px', width: '35%' }}
                    onChange={event => {
                        setDuration(event.target.value);
                    }}
                />
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setRecords([
                            ...records,
                            {
                                id: uuid(),
                                startTime: '',
                                endTime: '',
                                studentActivity: '',
                                staffActivity: '',
                                engagement: '',
                            },
                        ]);
                    }}
                >
                    Start Observation
                </Button>
                <br />
                {records.map(record => (
                    <div key={uuid()}>
                        <TextField
                            label="Start Time"
                            defaultValue={record.startTime}
                            margin="normal"
                            variant="outlined"
                            placeholder={moment().format('HH:mm')}
                            onChange={event => {
                                records.filter(
                                    i => i.id === record.id
                                )[0].startTime = event.target.value;
                            }}
                            style={{ marginRight: '10px', width: '10%' }}
                        />
                        <TextField
                            label="End Time"
                            defaultValue={record.endTime}
                            margin="normal"
                            variant="outlined"
                            placeholder={moment().format('HH:mm')}
                            onChange={event => {
                                records.filter(
                                    i => i.id === record.id
                                )[0].endTime = event.target.value;
                            }}
                            style={{ marginRight: '10px', width: '10%' }}
                        />
                        <TextField
                            select
                            label="Student Activity"
                            value={record.studentActivity}
                            margin="normal"
                            variant="outlined"
                            style={{ marginRight: '10px', width: '30%' }}
                            onChange={event => {
                                setRefreshRecord(uuid());
                                records.filter(
                                    i => i.id === record.id
                                )[0].studentActivity = event.target.value;
                            }}
                        >
                            {activities.map(
                                item =>
                                    item.student ? (
                                        <MenuItem
                                            key={item.id}
                                            value={item.name}
                                        >
                                            {item.name}
                                        </MenuItem>
                                    ) : (
                                        ''
                                    )
                            )}
                        </TextField>
                        <TextField
                            select
                            label="Staff Activity"
                            value={record.staffActivity}
                            margin="normal"
                            variant="outlined"
                            style={{ marginRight: '10px', width: '30%' }}
                            onChange={event => {
                                setRefreshRecord(uuid());
                                records.filter(
                                    i => i.id === record.id
                                )[0].staffActivity = event.target.value;
                            }}
                        >
                            {activities.map(
                                item =>
                                    item.staff ? (
                                        <MenuItem
                                            key={item.id}
                                            value={item.name}
                                        >
                                            {item.name}
                                        </MenuItem>
                                    ) : (
                                        ''
                                    )
                            )}
                        </TextField>
                        <TextField
                            label="Engagement(%)"
                            defaultValue={record.engagement}
                            margin="normal"
                            variant="outlined"
                            onChange={event => {
                                records.filter(
                                    i => i.id === record.id
                                )[0].engagement = event.target.value;
                            }}
                            onBlur={() => {
                                setRecords([
                                    ...records,
                                    {
                                        id: uuid(),
                                        startTime: '',
                                        endTime: '',
                                        studentActivity: '',
                                        staffActivity: '',
                                        engagement: '',
                                    },
                                ]);
                            }}
                            style={{ marginRight: '10px', width: '14%' }}
                        />
                    </div>
                ))}
                {records.length > 0 ? (
                    <Button
                        variant="contained"
                        color="primary"
                        onFocus={() => {
                            // event.preventDefault();
                            console.log(records);
                            addObservation(
                                uuid(),
                                semester,
                                date,
                                selectedCourse.code,
                                selectedCourse.name,
                                `${selectedStaff.title} ${
                                    selectedStaff.firstname
                                } ${selectedStaff.lastname}`,
                                location,
                                numberOfStudents,
                                duration,
                                records
                            );
                            setSemester('');
                            setDate(moment().format('YYYY-MM-DD'));
                            setSelectedCourseID('');
                            setSelectedStaffID('');
                            setLocation('');
                            setNumberofStudents('');
                            setDuration('');
                            setRecords([]);
                        }}
                    >
                        Add Observation
                    </Button>
                ) : (
                    ''
                )}
            </Container>
        </div>
    );
};
export default withRouter(
    connect(
        state => ({
            observations: state.observations,
            courses: state.courses,
            staff: state.staff,
            activities: state.activities,
        }),
        { addObservation }
    )(Observation)
);

Observation.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
