import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import uuid from 'uuid/v4';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { addCourse, removeCourse, updateCourse } from '../actions';

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

const CourseForm = ({ courses, addCourse, removeCourse, updateCourse }) => {
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseUnits, setCourseUnits] = useState('');
    const [courseSemester, setCourseSemester] = useState('');
    const [courseYear, setCourseYear] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [updateWindow, setUpdateWindow] = useState(false);
    const [updateCourseCode, setUpdateCourseCode] = useState('');
    const [updateCourseName, setUpdateCourseName] = useState('');
    const [updateCourseUnits, setUpdateCourseUnits] = useState('');
    const [updateCourseSemester, setUpdateCourseSemester] = useState('');
    const [updateCourseYear, setUpdateCourseYear] = useState('');
    const [isExpanded, setPanelExpansion] = useState(false);

    return (
        <div>
            <Dialog
                open={updateWindow}
                aria-labelledby="form-dialog-title"
                fullWidth
            >
                <DialogTitle id="form-dialog-title">Update Course</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Course Code"
                        value={updateCourseCode}
                        onChange={event => {
                            setUpdateCourseCode(event.target.value);
                        }}
                        fullWidth
                    />
                    <TextField
                        label="Course Name"
                        value={updateCourseName}
                        onChange={event => {
                            setUpdateCourseName(event.target.value);
                        }}
                        fullWidth
                    />
                    <FormControl style={{ minWidth: 120 }}>
                        <InputLabel>Units</InputLabel>
                        <Select
                            value={updateCourseUnits}
                            onChange={event => {
                                setUpdateCourseUnits(event.target.value);
                            }}
                        >
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl style={{ minWidth: 120 }}>
                        <InputLabel>Semester</InputLabel>
                        <Select
                            value={updateCourseSemester}
                            onChange={event => {
                                setUpdateCourseSemester(event.target.value);
                            }}
                        >
                            <MenuItem value="Semester 1">Semester 1</MenuItem>
                            <MenuItem value="Semester 2">Semester 2</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        label="Year"
                        type="number"
                        value={updateCourseYear}
                        onChange={event => {
                            setUpdateCourseYear(event.target.value);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <StyledButton
                        onClick={() => {
                            setUpdateWindow(false);
                            setSelectedId('');
                        }}
                        color="primary"
                    >
                        Cancel
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            updateCourse(
                                selectedId,
                                updateCourseCode,
                                updateCourseName,
                                updateCourseUnits,
                                updateCourseSemester,
                                updateCourseYear
                            );
                            setUpdateWindow(false);
                            setSelectedId('');
                        }}
                        color="primary"
                    >
                        Update
                    </StyledButton>
                </DialogActions>
            </Dialog>
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
                    <div>Course Detail Form</div>
                </ExpansionPanelSummary>
                <div style={{ padding: '25px' }}>
                    <div>Enter Course Details:</div>
                    <TextField
                        onChange={event => {
                            setCourseCode(event.target.value);
                        }}
                        margin="normal"
                        variant="outlined"
                        label="Course Code"
                        placeholder="DECO7861"
                        value={courseCode}
                        // fullWidth
                    />
                    <br />
                    <TextField
                        onChange={event => {
                            setCourseName(event.target.value);
                        }}
                        margin="normal"
                        variant="outlined"
                        label="Course Name"
                        placeholder="Masters Thesis"
                        value={courseName}
                        // fullWidth
                    />
                    <br />
                    <FormControl style={{ minWidth: 120 }}>
                        <InputLabel>Units</InputLabel>
                        <Select
                            value={courseUnits}
                            onChange={event => {
                                setCourseUnits(event.target.value);
                            }}
                        >
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl style={{ minWidth: 120 }}>
                        <InputLabel>Semester</InputLabel>
                        <Select
                            value={courseSemester}
                            onChange={event => {
                                setCourseSemester(event.target.value);
                            }}
                        >
                            <MenuItem value="Semester 1">Semester 1</MenuItem>
                            <MenuItem value="Semester 2">Semester 2</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        onChange={event => {
                            setCourseYear(event.target.value);
                        }}
                        variant="outlined"
                        margin="normal"
                        label="Year"
                        type="number"
                        value={courseYear}
                    />
                    <br />
                    <StyledButton
                        variant="contained"
                        color="secondary"
                        disabled={
                            !courseCode ||
                            !courseName ||
                            !courseSemester ||
                            !courseUnits ||
                            !courseYear
                        }
                        onClick={() => {
                            addCourse(
                                uuid(),
                                courseCode,
                                courseName,
                                courseUnits,
                                courseSemester,
                                courseYear
                            );
                            setCourseCode('');
                            setCourseName('');
                            setCourseUnits('');
                            setCourseSemester('');
                            setCourseYear('');
                        }}
                    >
                        ADD COURSE
                    </StyledButton>
                    <br />
                    <br />
                    <div>
                        <div>Current Courses:</div>
                        <FormGroup>
                            {courses.map(item => (
                                <FormControlLabel
                                    key={item.id}
                                    control={
                                        <Radio
                                            checked={item.id === selectedId}
                                            onChange={event => {
                                                if (
                                                    event.target.checked ===
                                                    true
                                                ) {
                                                    setSelectedId(
                                                        event.target.value
                                                    );
                                                    const courseToUpdate = courses.filter(
                                                        i =>
                                                            i.id ===
                                                            event.target.value
                                                    )[0];
                                                    setUpdateCourseCode(
                                                        courseToUpdate.code
                                                    );
                                                    setUpdateCourseName(
                                                        courseToUpdate.name
                                                    );
                                                    setUpdateCourseUnits(
                                                        courseToUpdate.units
                                                    );
                                                    setUpdateCourseSemester(
                                                        courseToUpdate.semester
                                                    );
                                                    setUpdateCourseYear(
                                                        courseToUpdate.year
                                                    );
                                                } else {
                                                    setSelectedId('');
                                                }
                                            }}
                                            value={item.id}
                                        />
                                    }
                                    label={`${item.code} ${item.name}- ${
                                        item.semester
                                    }, ${item.year}`}
                                />
                            ))}
                        </FormGroup>
                        <StyledButton
                            variant="contained"
                            color="primary"
                            disabled={
                                !(
                                    selectedId &&
                                    courses.filter(e => e.id === selectedId)
                                        .length > 0
                                )
                            }
                            onClick={() => {
                                setUpdateWindow(true);
                            }}
                        >
                            UPDATE COURSE
                        </StyledButton>
                        <StyledButton
                            variant="contained"
                            color="secondary"
                            disabled={
                                !(
                                    selectedId &&
                                    courses.filter(e => e.id === selectedId)
                                        .length > 0
                                )
                            }
                            onClick={() => {
                                removeCourse(selectedId);
                            }}
                        >
                            DELETE COURSE
                        </StyledButton>
                    </div>
                </div>
            </ExpansionPanel>
        </div>
    );
};

export default withRouter(
    connect(
        state => ({
            courses: state.courses,
        }),
        {
            addCourse,
            removeCourse,
            updateCourse,
        }
    )(CourseForm)
);

CourseForm.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
