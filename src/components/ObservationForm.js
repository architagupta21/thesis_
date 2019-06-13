import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const Observation = ({ observations, courses, staff }) => {
    const [semester, setSemester] = useState('');
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    const [selectedCourseID, setSelectedCourseID] = useState('');
    const [selectedStaffID, setSelectedStaffID] = useState('');
    const [location, setLocation] = useState('');
    const [numberOfStudents, setNumberofStudents] = useState('');
    const [duration, setDuration] = useState('');

    const courseFiltered = courses.filter(
        course => course.id === selectedCourseID
    );
    const staffFiltered = staff.filter(staff => staff.id === selectedStaffID);
    const selectedCourse = courseFiltered.length > 0 ? courseFiltered[0] : {};
    const selectedStaff = staffFiltered.length > 0 ? staffFiltered[0] : {};

    console.log(selectedCourse.code);

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
                    // disabled={
                    //     !(
                    //         selectedId &&
                    //         courses.filter(e => e.id === selectedId)
                    //             .length > 0
                    //     )
                    // }
                    // onClick={() => {
                    //     setUpdateWindow(true);
                    // }}
                >
                    Start Observation
                </Button>
            </Container>
        </div>
    );
};
export default withRouter(
    connect(state => ({
        save: state.save,
        courses: state.courses,
        staff: state.staff,
    }))(Observation)
);

Observation.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
