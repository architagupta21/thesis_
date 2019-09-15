import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import Radio from '@material-ui/core/Radio';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StudentActiveLearningData from '../data/StudentActiveLearning';
import StaffActiveLearningData from '../data/StaffActiveLearning';
import Sunburst from './Sunburst';
import newData from '../data/AllData';

const Analysis = () => {
    const [program, setProgram] = useState('');
    const [course, setCourse] = useState('');
    const [obData, setObData] = useState('');
    const [dispaly, setDisplay] = useState(false);
    const [showProgramData, setProgramData] = useState(false);
    const [showCourseLevelData, setCourseData] = useState(false);
    const [studentActicity, setStudentActivity] = useState('');
    const [staffActicity, setStaffActivity] = useState('');
    const [smartScreen, setSmartScreen] = useState(false);
    const [whiteBoard, setWhiteBoard] = useState(false);
    const [hearingAssistance, setHearingAssistance] = useState(false);

    console.log(
        'course name:',
        newData[0].children
            .filter(i => i.name === program)
            .map(item =>
                item.children.map(
                    courseName => courseName.averageDiscussionEngagement
                )
            )[0]
    );
    return (
        <div className="App">
            <h3>Welcome to the Analytics page!</h3>
            {/* {digram(observationData[0])} */}
            {/* <Sunburst id="sunburst" data={newData[0]} /> */}
            <h2>Faculty : {newData[0].name}</h2>
            <div
                style={{
                    float: 'right',
                    // paddingRight: '50px',
                    width: '50%',
                    border: 'ridge',
                }}
            >
                <div style={{ marginLeft: '50px' }}>
                    <div>Select Student Engagement Activity:</div>
                    <TextField
                        select
                        label="Student Enagagement Type"
                        value={studentActicity}
                        disabled={!(obData === '')}
                        onChange={event => {
                            setStudentActivity(event.target.value);
                            setDisplay(false);
                        }}
                        margin="normal"
                        // variant="outlined"
                        style={{ width: '45%' }}
                    >
                        <MenuItem
                            key="Listening"
                            value="Listening"
                            style={{
                                fontStyle: 'italic',
                                fontSize: '15px',
                            }}
                        >
                            {'Listening'}
                        </MenuItem>
                        <MenuItem
                            key="Clicker question discussion"
                            value="Clicker question discussion"
                            style={{
                                fontStyle: 'italic',
                                fontSize: '15px',
                            }}
                        >
                            {'Clicker question discussion'}
                        </MenuItem>
                    </TextField>
                    <br />
                    <div>Select Staff Engagement Activity:</div>
                    <TextField
                        select
                        label="Staff Enagagement Type"
                        value={staffActicity}
                        disabled={!(obData === '')}
                        onChange={event => {
                            setStaffActivity(event.target.value);
                            setDisplay(false);
                        }}
                        margin="normal"
                        // variant="outlined"
                        style={{ width: '45%' }}
                    >
                        <MenuItem
                            key="Lecturing"
                            value="Lecturing"
                            style={{
                                fontStyle: 'italic',
                                fontSize: '15px',
                            }}
                        >
                            {'Lecturing'}
                        </MenuItem>
                        <MenuItem
                            key="Clicker questions"
                            value="Clicker questions"
                            style={{
                                fontStyle: 'italic',
                                fontSize: '15px',
                            }}
                        >
                            {'Clicker questions'}
                        </MenuItem>
                    </TextField>
                    <br />
                    <br />

                    <div>Select the Learning Space:</div>
                    <FormControl
                        disabled={!(obData === '')}
                        onChange={event => {
                            if (
                                event.target.value === 'smart screen' &&
                                event.target.checked === true
                            ) {
                                setSmartScreen(true);
                            }
                            if (
                                event.target.value === 'white board' &&
                                event.target.checked === true
                            ) {
                                setWhiteBoard(true);
                            }
                            if (
                                event.target.value === 'hearing assistance' &&
                                event.target.checked === true
                            ) {
                                setHearingAssistance(true);
                            }
                            if (
                                event.target.value === 'smart screen' &&
                                event.target.checked === false
                            ) {
                                setSmartScreen(false);
                            }
                            if (
                                event.target.value === 'white board' &&
                                event.target.checked === false
                            ) {
                                setWhiteBoard(false);
                            }
                            if (
                                event.target.value === 'hearing assistance' &&
                                event.target.checked === false
                            ) {
                                setHearingAssistance(false);
                            }
                        }}
                    >
                        <FormControlLabel
                            value="smart screen"
                            control={<Checkbox />}
                            label="smart screen"
                            checked={smartScreen}
                        />
                        <FormControlLabel
                            value="white board"
                            control={<Checkbox />}
                            label="white board"
                            checked={whiteBoard}
                        />
                        <FormControlLabel
                            value="hearing assistance"
                            control={<Checkbox />}
                            label="hearing assistance"
                            checked={hearingAssistance}
                        />
                    </FormControl>
                </div>
            </div>
            <div style={{ float: 'left', width: '50%', border: 'ridge' }}>
                <div style={{ marginLeft: '50px', marginBottom: '155px' }}>
                    <TextField
                        select
                        label="Select Programs"
                        value={program}
                        onChange={event => {
                            setProgram(event.target.value);
                            setDisplay(false);
                        }}
                        margin="normal"
                        // variant="outlined"
                        style={{ width: '55%' }}
                    >
                        {newData[0].children.map(item => (
                            <MenuItem
                                key={item.name}
                                value={item.name}
                                style={{
                                    fontStyle: 'italic',
                                    fontSize: '15px',
                                }}
                            >
                                {item.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br />
                    <TextField
                        select
                        label="Select Course"
                        value={course}
                        onChange={event => {
                            setCourse(event.target.value);
                            setDisplay(false);
                        }}
                        margin="normal"
                        // variant="outlined"
                        style={{ width: '55%' }}
                    >
                        {newData[0].children
                            .filter(i => i.name === program)
                            .map(item =>
                                item.children.map(courseName => (
                                    <MenuItem
                                        key={courseName.name}
                                        value={courseName.name}
                                        style={{
                                            fontStyle: 'italic',
                                            fontSize: '15px',
                                        }}
                                    >
                                        {courseName.name}
                                    </MenuItem>
                                ))
                            )}
                    </TextField>
                    <br />
                    <TextField
                        select
                        label="Select Observation"
                        value={obData}
                        onChange={event => {
                            setObData(event.target.value);
                            setDisplay(false);
                            console.log(obData);
                        }}
                        margin="normal"
                        // variant="outlined"
                        style={{ width: '45%' }}
                    >
                        {newData[0].children
                            .filter(i => i.name === program)
                            .map(item =>
                                item.children
                                    .filter(k => k.name === course)
                                    .map(j =>
                                        j.children.map(obName => (
                                            <MenuItem
                                                key={obName.name}
                                                value={obName.name}
                                                style={{
                                                    fontStyle: 'italic',
                                                    fontSize: '15px',
                                                }}
                                                dense
                                            >
                                                {obName.name}
                                            </MenuItem>
                                        ))
                                    )
                            )}
                    </TextField>
                    <br />
                </div>
            </div>

            <Button
                variant="contained"
                color="primary"
                style={{ margin: '15px' }}
                onClick={() => {
                    if (program !== '' && course !== '' && obData !== '') {
                        setDisplay(true);
                        setProgramData(false);
                        setCourseData(false);
                    } else if (program !== '' && course !== '') {
                        setCourseData(true);
                        setDisplay(false);
                        setProgramData(false);
                    } else {
                        setDisplay(false);
                        setCourseData(false);
                        setProgramData(true);
                    }
                }}
            >
                Analyse Data
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    setDisplay(false);
                    setCourseData(false);
                    setProgramData(false);
                    setProgram('');
                    setCourse('');
                }}
            >
                Clear Data
            </Button>

            {dispaly === true ? (
                <div>
                    <div>
                        <br />
                        <h2>Students and staffs engagement in one session:</h2>
                        <Sunburst
                            id="sunburst1"
                            data={
                                newData[0].children
                                    .filter(i => i.name === program)
                                    .map(item =>
                                        item.children
                                            .filter(k => k.name === course)
                                            .map(j =>
                                                j.children.filter(
                                                    l => l.name === obData
                                                )
                                            )
                                    )[0][0][0]
                            }
                        />
                    </div>
                    <div>
                        <h2>Students learning activities in one session:</h2>
                        <Sunburst
                            id="sunburst2"
                            data={
                                StudentActiveLearningData.filter(
                                    item => item.name === obData
                                )[0]
                            }
                        />
                    </div>
                    <div>
                        <h2>Staffs learning activities in one session:</h2>
                        <Sunburst
                            id="sunburst3"
                            data={
                                StaffActiveLearningData.filter(
                                    item => item.name === obData
                                )[0]
                            }
                        />
                    </div>
                </div>
            ) : (
                ''
            )}
            {showProgramData === true ? (
                <div>
                    <h3 style={{ marginTop: '15px' }}>
                        Showing Program Level Analysis
                    </h3>
                    <h4>
                        For specific courses and programs please select
                        dropdowns accordingly!
                    </h4>
                    <Bar
                        data={{
                            labels: newData[0].children.map(item => item.name),
                            datasets: [
                                {
                                    label:
                                        'Discussion Activity Engagement Across programs',
                                    backgroundColor: 'rgba(201, 16, 16)',
                                    borderColor: 'rgba(255,99,132,1)',
                                    borderWidth: 2,
                                    hoverBackgroundColor:
                                        'rgba(255,99,132,0.4)',
                                    hoverBorderColor: 'rgba(255,99,132,1)',
                                    data: newData[0].children.map(
                                        item => item.averageDiscussionEngagement
                                    ),
                                },
                            ],
                        }}
                        // width={50}
                        height={50}
                        // options={{ maintainAspectRatio: true }}
                    />
                </div>
            ) : (
                ''
            )}

            {showCourseLevelData === true ? (
                <div>
                    {/* Please Select valid values from the above dropdowns! */}
                    <Bar
                        data={{
                            labels: newData[0].children
                                .filter(i => i.name === program)
                                .map(item =>
                                    item.children.map(
                                        courseName => courseName.name
                                    )
                                )[0],
                            datasets: [
                                {
                                    label:
                                        'Discussion Activity Engagement Across courses',
                                    backgroundColor: 'rgba(201, 16, 16)',
                                    borderColor: 'rgba(255,99,132,1)',
                                    borderWidth: 2,
                                    hoverBackgroundColor:
                                        'rgba(255,99,132,0.4)',
                                    hoverBorderColor: 'rgba(255,99,132,1)',
                                    data: newData[0].children
                                        .filter(i => i.name === program)
                                        .map(item =>
                                            item.children.map(
                                                courseName =>
                                                    courseName.averageDiscussionEngagement
                                            )
                                        )[0],
                                },
                            ],
                        }}
                        // width={50}
                        height={50}
                        // options={{ maintainAspectRatio: true }}
                    />
                </div>
            ) : (
                ''
            )}
        </div>
    );
};
export default withRouter(
    connect(state => ({
        save: state.save,
    }))(Analysis)
);

Analysis.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
