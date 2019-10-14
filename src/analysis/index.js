/* eslint-disable camelcase */
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Pie, Doughnut, Bar, Polar } from 'react-chartjs-2';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StudentActiveLearningData from '../data/StudentActiveLearning';
import StaffActiveLearningData from '../data/StaffActiveLearning';
import SlotData from '../data/Slot';
import Sunburst from './Sunburst';
import newData from '../data/AllData';

// function getRandomArray(numItems) {
//     // Create random array of objects
//     // const names = 'Week_';
//     const data = [];
//     for (let i = 0; i < numItems; ) {
//         data.push(Math.round(20 + 80 * Math.random()));
//     }
//     console.log(data);
//     return data;
// }
const Analysis = () => {
    const [program, setProgram] = useState('');
    const [course, setCourse] = useState('');
    const [obData, setObData] = useState('');
    const [display, setDisplay] = useState(false);
    const [showProgramData, setProgramData] = useState(false);
    const [showCourseLevelData, setCourseData] = useState(false);
    const [studentActivity, setStudentActivity] = useState('');
    const [staffActicity, setStaffActivity] = useState('');
    const [smartScreen, setSmartScreen] = useState(false);
    const [whiteBoard, setWhiteBoard] = useState(false);
    const [hearingAssistance, setHearingAssistance] = useState(false);
    const [programEngagementDisplay, setProgramEngagementDisplay] = useState(
        false
    );
    const [courseEngagementDisplay, setCourseEngagementDisplay] = useState(
        false
    );
    const [
        staffprogramEngagementDisplay,
        setStaffProgramEngagementDisplay,
    ] = useState(false);
    const [
        staffcourseEngagementDisplay,
        setStaffCourseEngagementDisplay,
    ] = useState(false);
    const [
        programEngagement_studentStaff,
        setProgramEngagement_studentStaff,
    ] = useState(false);
    const [
        courseEngagement_studentStaff,
        setCourseEngagement_studentStaff,
    ] = useState(false);

    const [programSpaceDisplay, setProgramSpaceDisplay] = useState(false);
    const [courseSpaceDisplay, setCourseSpaceDisplay] = useState(false);
    const barLabels = [
        'Week1',
        'Week2',
        'Week3',
        'Week4',
        'Week5',
        'Week6',
        'Week7',
        'Week8',
        'Week9',
        'Week10',
        'Week11',
        'Week12',
    ];
    const barColor = '#3f51b5';
    const multiColor = [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF1324',
        '#31A2BB',
        '#FDCE16',
        '#DF6384',
        '#16A6ED',
        '#CCFE11',
        '#EE6348',
        '#63A2BE',
        '#CEFF56',
    ];
    const barOptions = {
        scales: {
            xAxes: [
                {
                    barPercentage: 0.3,
                },
            ],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 100,
                    },
                },
            ],
        },
        maintainAspectRatio: true,
    };

    const StudentEngagementDataProgram = {
        labels: barLabels,
        datasets: [
            {
                label: `Student Engagement- ${studentActivity} During a Semester for ${program}`,
                backgroundColor: barColor,
                borderColor: barColor,
                borderWidth: 2,
                hoverBackgroundColor: barColor,
                hoverBorderColor: barColor,
                data: [65, 70, 80, 81, 90, 91, 95, 83, 70, 58, 44, 22],
            },
        ],
        height: '600px',
        width: '1000px',
        margin: '25%',
    };

    const StudentEngagementDataProgram_Pie = {
        labels: barLabels,
        datasets: [
            {
                backgroundColor: multiColor,
                borderColor: multiColor,
                borderWidth: 5,
                data: [65, 70, 80, 81, 90, 91, 95, 83, 70, 58, 44, 22],
            },
        ],
    };

    const StudentEngagementDataCourse = {
        labels: barLabels,
        datasets: [
            {
                label: `Student Engagement- ${studentActivity} During a Semester for ${course}`,
                backgroundColor: barColor,
                borderColor: barColor,
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: barColor,
                data: [55, 80, 70, 41, 60, 81, 85, 73, 60, 48, 34, 52],
            },
        ],
    };

    const StaffEngagementDataProgram = {
        labels: barLabels,
        datasets: [
            {
                label: `Staff Engagement- ${staffActicity} During a Semester for ${program}`,
                backgroundColor: barColor,
                borderColor: barColor,
                borderWidth: 2,
                hoverBackgroundColor: barColor,
                hoverBorderColor: barColor,
                data: [65, 60, 70, 71, 80, 81, 75, 53, 60, 78, 74, 72],
            },
        ],
    };

    const StaffEngagementDataCourse = {
        labels: barLabels,
        datasets: [
            {
                label: `Staff Engagement- ${staffActicity} During a Semester for ${course}`,
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: '#3f51b5',
                data: [75, 90, 50, 41, 80, 81, 85, 67, 60, 48, 34, 22],
                // data: getRandomArray(12),
            },
        ],
    };

    const ProgramStudentStaffEngagement = {
        labels: barLabels,
        datasets: [
            {
                label: `Time Percentage Spent by Staff on: ${staffActicity} During a Semester for ${program}`,
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                borderWidth: 2,
                hoverBackgroundColor: '#3f51b5',
                hoverBorderColor: '#3f51b5',
                data: [65, 70, 80, 81, 90, 91, 95, 83, 70, 58, 44, 22],
            },
        ],
    };

    const CourseStudentStaffEngagement = {
        labels: barLabels,
        datasets: [
            {
                label: `Time Percentage Spent by Staff on: ${staffActicity} During a Semester in ${course}`,
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                borderWidth: 2,
                hoverBackgroundColor: '#3f51b5',
                hoverBorderColor: '#3f51b5',
                data: [55, 60, 70, 71, 80, 81, 85, 73, 60, 48, 34, 22],
            },
        ],
    };
    return (
        <div className="App">
            <h2 style={{ textAlign: 'center' }}>COPUS Insights</h2>
            <h3>Faculty : {newData[0].name}</h3>
            <div
                style={{
                    float: 'right',
                    width: '50%',
                    border: 'ridge',
                    height: '500px',
                }}
            >
                <div style={{ marginLeft: '50px' }}>
                    <h3>
                        Select Student/Staff Engagement Activities:
                        <h5 style={{ margin: 'unset' }}>
                            (Applicable only for Program and Course level
                            selection)
                        </h5>
                    </h3>
                    <TextField
                        select
                        label="Student Enagagement Type"
                        value={studentActivity}
                        disabled={!(obData === '')}
                        onChange={event => {
                            setStudentActivity(event.target.value);
                            setDisplay(false);
                        }}
                        margin="dense"
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
                    {/* <div style={{ marginTop: '40px' }}>
                        Select Staff Engagement Activity:
                    </div> */}
                    <br />
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

                    <h3>
                        Select the Learning Space:
                        <h5 style={{ margin: 'unset' }}>
                            (Applicable only for Program and Course level
                            selection)
                        </h5>
                    </h3>
                    <FormControl
                        disabled={!(obData === '')}
                        onChange={event => {
                            if (
                                event.target.value === 'smart screen' &&
                                event.target.checked === true
                            ) {
                                setSmartScreen(true);
                                if (program !== '' && course === '') {
                                    setProgramSpaceDisplay(true);
                                    setCourseSpaceDisplay(false);
                                    setSmartScreen(true);
                                } else if (program !== '' && course !== '') {
                                    setCourseSpaceDisplay(true);
                                    setProgramSpaceDisplay(false);
                                }
                            }
                            if (
                                event.target.value === 'white board' &&
                                event.target.checked === true
                            ) {
                                setWhiteBoard(true);
                                if (program !== '' && course === '') {
                                    setProgramSpaceDisplay(true);
                                    setCourseSpaceDisplay(false);
                                }
                                if (program !== '' && course !== '') {
                                    setCourseSpaceDisplay(true);
                                    setProgramSpaceDisplay(false);
                                }
                            }
                            if (
                                event.target.value === 'hearing assistance' &&
                                event.target.checked === true
                            ) {
                                setHearingAssistance(true);
                                if (program !== '' && course === '') {
                                    setProgramSpaceDisplay(true);
                                    setCourseSpaceDisplay(false);
                                }
                                if (program !== '' && course !== '') {
                                    setCourseSpaceDisplay(true);
                                    setProgramSpaceDisplay(false);
                                }
                            }
                            if (
                                event.target.value === 'smart screen' &&
                                event.target.checked === false
                            ) {
                                setSmartScreen(false);
                                setCourseSpaceDisplay(false);
                                setProgramSpaceDisplay(false);
                            }
                            if (
                                event.target.value === 'white board' &&
                                event.target.checked === false
                            ) {
                                setWhiteBoard(false);
                                setCourseSpaceDisplay(false);
                                setProgramSpaceDisplay(false);
                            }
                            if (
                                event.target.value === 'hearing assistance' &&
                                event.target.checked === false
                            ) {
                                setHearingAssistance(false);
                                setCourseSpaceDisplay(false);
                                setProgramSpaceDisplay(false);
                            }
                        }}
                    >
                        <FormControlLabel
                            value="smart screen"
                            control={<Checkbox />}
                            label="smart screen"
                            checked={smartScreen}
                            disabled={
                                !(obData === '') ||
                                (program !== '' && course !== ''
                                    ? newData[0].children
                                          .filter(i => i.name === program)
                                          .map(
                                              i =>
                                                  i.children.filter(
                                                      i => i.name === course
                                                  )[0].isSmartScreen
                                          )[0] === false
                                    : '')
                            }
                        />
                        <FormControlLabel
                            value="white board"
                            control={<Checkbox />}
                            label="white board"
                            checked={whiteBoard}
                            disabled={
                                !(obData === '') ||
                                (program !== '' && course !== ''
                                    ? newData[0].children
                                          .filter(i => i.name === program)
                                          .map(
                                              i =>
                                                  i.children.filter(
                                                      i => i.name === course
                                                  )[0].isWhiteBoard
                                          )[0] === false
                                    : '')
                            }
                        />
                        <FormControlLabel
                            value="hearing assistance"
                            control={<Checkbox />}
                            label="hearing assistance"
                            checked={hearingAssistance}
                            disabled={
                                !(obData === '') ||
                                (program !== '' && course !== ''
                                    ? newData[0].children
                                          .filter(i => i.name === program)
                                          .map(
                                              i =>
                                                  i.children.filter(
                                                      i => i.name === course
                                                  )[0].isHearingAssistance
                                          )[0] === false
                                    : '')
                            }
                        />
                    </FormControl>
                </div>
            </div>
            <div
                style={{
                    float: 'left',
                    width: '50%',
                    border: 'ridge',
                    height: '500px',
                }}
            >
                <div style={{ marginLeft: '50px' }}>
                    <h3>
                        Please select appropriate filters for data insights
                        below:
                    </h3>
                    <TextField
                        select
                        label="Select Programs"
                        value={program}
                        onChange={event => {
                            setProgram(event.target.value);
                            setDisplay(false);
                        }}
                        margin="normal"
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
                            setProgramData(false);
                            setProgramEngagementDisplay(false);
                            setProgramSpaceDisplay(false);
                            setStaffProgramEngagementDisplay(false);
                            setSmartScreen(false);
                            setWhiteBoard(false);
                            setHearingAssistance(false);
                            setStaffActivity('');
                            setStudentActivity('');
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
                        style={{ width: '55%' }}
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
                style={{ margin: '55px', textAlign: 'center' }}
                onClick={() => {
                    if (program !== '' && course !== '' && obData !== '') {
                        setDisplay(true);
                        setProgramData(false);
                        setCourseData(false);
                        setProgramEngagementDisplay(false);
                        setCourseEngagementDisplay(false);
                        setStaffProgramEngagementDisplay(false);
                        setStaffCourseEngagementDisplay(false);
                        setCourseEngagement_studentStaff(false);
                        setProgramEngagement_studentStaff(false);
                    } else if (
                        program !== '' &&
                        course !== '' &&
                        studentActivity === '' &&
                        staffActicity === ''
                    ) {
                        setCourseData(true);
                        setDisplay(false);
                        setProgramData(false);
                        setProgramEngagementDisplay(false);
                        setCourseEngagementDisplay(false);
                        setStaffProgramEngagementDisplay(false);
                        setStaffCourseEngagementDisplay(false);
                        setCourseEngagement_studentStaff(false);
                        setProgramEngagement_studentStaff(false);
                    } else if (
                        program !== '' &&
                        studentActivity !== '' &&
                        course === '' &&
                        staffActicity === ''
                    ) {
                        setProgramEngagementDisplay(true);
                        setDisplay(false);
                        setProgramData(false);
                        setCourseData(false);
                        setCourseEngagementDisplay(false);
                        setStaffCourseEngagementDisplay(false);
                        setStaffProgramEngagementDisplay(false);
                        setCourseEngagement_studentStaff(false);
                        setProgramEngagement_studentStaff(false);
                    } else if (
                        program !== '' &&
                        course !== '' &&
                        studentActivity !== '' &&
                        staffActicity === ''
                    ) {
                        setProgramEngagementDisplay(false);
                        setDisplay(false);
                        setProgramData(false);
                        setCourseData(false);
                        setStaffCourseEngagementDisplay(false);
                        setCourseEngagementDisplay(true);
                        setStaffProgramEngagementDisplay(false);
                        setCourseEngagement_studentStaff(false);
                        setProgramEngagement_studentStaff(false);
                    } else if (
                        program !== '' &&
                        staffActicity !== '' &&
                        course === '' &&
                        studentActivity === ''
                    ) {
                        setDisplay(false);
                        setProgramData(false);
                        setCourseData(false);
                        setProgramEngagementDisplay(false);
                        setCourseEngagementDisplay(false);
                        setStaffProgramEngagementDisplay(true);
                        setStaffCourseEngagementDisplay(false);
                        setCourseEngagement_studentStaff(false);
                        setProgramEngagement_studentStaff(false);
                    } else if (
                        program !== '' &&
                        course !== '' &&
                        studentActivity === '' &&
                        staffActicity !== ''
                    ) {
                        setDisplay(false);
                        setProgramData(false);
                        setCourseData(false);
                        setProgramEngagementDisplay(false);
                        setCourseEngagementDisplay(false);
                        setStaffProgramEngagementDisplay(false);
                        setStaffCourseEngagementDisplay(true);
                        setCourseEngagement_studentStaff(false);
                        setProgramEngagement_studentStaff(false);
                    } else if (
                        program !== '' &&
                        course === '' &&
                        staffActicity !== '' &&
                        studentActivity !== ''
                    ) {
                        setDisplay(false);
                        setProgramData(false);
                        setCourseData(false);
                        setProgramEngagementDisplay(false);
                        setCourseEngagementDisplay(false);
                        setStaffProgramEngagementDisplay(false);
                        setStaffCourseEngagementDisplay(false);
                        setProgramEngagement_studentStaff(true);
                        setCourseEngagement_studentStaff(false);
                    } else if (
                        program !== '' &&
                        course !== '' &&
                        staffActicity !== '' &&
                        studentActivity !== ''
                    ) {
                        setDisplay(false);
                        setProgramData(false);
                        setCourseData(false);
                        setProgramEngagementDisplay(false);
                        setCourseEngagementDisplay(false);
                        setStaffProgramEngagementDisplay(false);
                        setStaffCourseEngagementDisplay(false);
                        setCourseEngagement_studentStaff(true);
                        setProgramEngagement_studentStaff(false);
                    } else {
                        setCourseEngagement_studentStaff(false);
                        setProgramEngagement_studentStaff(false);
                        setStaffProgramEngagementDisplay(false);
                        setStaffCourseEngagementDisplay(false);
                        setCourseEngagementDisplay(false);
                        setProgramEngagementDisplay(false);
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
                style={{ textAlign: 'center' }}
                onClick={() => {
                    setCourseEngagement_studentStaff(false);
                    setProgramEngagement_studentStaff(false);
                    setStaffProgramEngagementDisplay(false);
                    setStaffCourseEngagementDisplay(false);
                    setCourseEngagementDisplay(false);
                    setProgramEngagementDisplay(false);
                    setStaffActivity('');
                    setStudentActivity('');
                    setDisplay(false);
                    setCourseData(false);
                    setProgramData(false);
                    setWhiteBoard(false);
                    setHearingAssistance(false);
                    setSmartScreen(false);
                    setProgram('');
                    setCourse('');
                    setObData('');
                }}
            >
                Clear Data
            </Button>
            <div>
                {display === true ? (
                    <div>
                        <div>
                            <br />
                            <div>
                                <h2>Learning activities in one session:</h2>
                                <Sunburst
                                    id="sunburst0"
                                    data={
                                        SlotData.filter(
                                            item => item.name === obData
                                        )[0]
                                    }
                                />
                            </div>
                            <h2>Students engagement in one session:</h2>
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
                                        )[0][0][0].children[0]
                                }
                            />
                        </div>
                        <div>
                            <h2>Students active learning in one session:</h2>
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
                            <h2>Staffs active learning in one session:</h2>
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
                                labels: newData[0].children.map(
                                    item => item.name
                                ),
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
                                            item =>
                                                item.averageDiscussionEngagement
                                        ),
                                    },
                                ],
                            }}
                            maintainAspectRatio
                            options={barOptions}
                        />
                        <Bar
                            data={{
                                labels: newData[0].children.map(
                                    item => item.name
                                ),
                                datasets: [
                                    {
                                        label:
                                            'Listening Activity Engagement Across programs',
                                        backgroundColor: 'rgba(201, 16, 16)',
                                        borderColor: 'rgba(255,99,132,1)',
                                        borderWidth: 2,
                                        hoverBackgroundColor:
                                            'rgba(255,99,132,0.4)',
                                        hoverBorderColor: 'rgba(255,99,132,1)',
                                        data: newData[0].children.map(
                                            item =>
                                                item.averageListeningEngagement
                                        ),
                                    },
                                ],
                            }}
                            // width={50}
                            options={barOptions}
                        />
                    </div>
                ) : (
                    ''
                )}
                {showCourseLevelData === true ? (
                    <div>
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
                            options={barOptions}
                        />
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
                                            'Listening Activity Engagement Across courses',
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
                                                        courseName.averageListeningEngagement
                                                )
                                            )[0],
                                    },
                                ],
                            }}
                            options={barOptions}
                        />
                    </div>
                ) : (
                    ''
                )}
                {programEngagementDisplay === true ? (
                    <div>
                        <Bar
                            data={StudentEngagementDataProgram}
                            options={barOptions}
                        />
                        <br />
                        <br />
                        <br />
                        <h3>
                            A Polar Chart Representation from Above Engagement
                            Scores:
                        </h3>
                        <br />
                        <Polar
                            data={StudentEngagementDataProgram_Pie}
                            options={{
                                legend: {
                                    display: false,
                                },
                            }}
                            // maintainAspectRatio
                            // width="900px"
                        />
                    </div>
                ) : (
                    ''
                )}
                {courseEngagementDisplay === true ? (
                    <Bar
                        data={StudentEngagementDataCourse}
                        options={barOptions}
                    />
                ) : (
                    ''
                )}
                {staffprogramEngagementDisplay === true ? (
                    <Bar
                        data={StaffEngagementDataProgram}
                        options={barOptions}
                    />
                ) : (
                    ''
                )}
                {staffcourseEngagementDisplay === true ? (
                    <Bar
                        data={StaffEngagementDataCourse}
                        options={barOptions}
                    />
                ) : (
                    ''
                )}
                {programEngagement_studentStaff === true ? (
                    <div>
                        <Bar
                            data={ProgramStudentStaffEngagement}
                            options={barOptions}
                        />
                        <Bar
                            data={{
                                labels: barLabels,
                                datasets: [
                                    {
                                        label: `Student ${studentActivity} Engagement During a Semester in a ${program}`,
                                        backgroundColor: 'rgba(300, 46, 76)',
                                        borderColor: 'rgba(255,99,132,1)',
                                        borderWidth: 2,
                                        hoverBackgroundColor:
                                            'rgba(255,99,132,0.4)',
                                        hoverBorderColor: 'rgba(255,99,132,1)',
                                        data: [
                                            25,
                                            40,
                                            20,
                                            31,
                                            10,
                                            31,
                                            25,
                                            43,
                                            50,
                                            48,
                                            24,
                                            12,
                                        ],
                                    },
                                ],
                            }}
                            options={barOptions}
                        />
                    </div>
                ) : (
                    ''
                )}
                {courseEngagement_studentStaff === true ? (
                    <div>
                        <Bar
                            data={CourseStudentStaffEngagement}
                            options={barOptions}
                        />
                        <Bar
                            data={{
                                labels: barLabels,
                                datasets: [
                                    {
                                        label: `Student ${studentActivity} Engagement During a Semester in ${course}`,
                                        backgroundColor: 'rgba(300, 46, 76)',
                                        borderColor: 'rgba(255,99,132,1)',
                                        borderWidth: 2,
                                        hoverBackgroundColor:
                                            'rgba(255,99,132,0.4)',
                                        hoverBorderColor: 'rgba(255,99,132,1)',
                                        data: [
                                            55,
                                            60,
                                            70,
                                            71,
                                            80,
                                            81,
                                            85,
                                            73,
                                            60,
                                            48,
                                            34,
                                            82,
                                        ],
                                    },
                                ],
                            }}
                            options={barOptions}
                        />
                    </div>
                ) : (
                    ''
                )}
                {programSpaceDisplay === true &&
                newData[0].children.filter(i => i.name === program)[0]
                    .isSmartScreen ? (
                    <Bar
                        data={{
                            labels: newData[0].children.map(item => item.name),
                            datasets: [
                                {
                                    label:
                                        'Listening Activity engagement with Smart Screens present- Program Level',
                                    backgroundColor: '#FF6347',
                                    borderColor: '#FF6347',
                                    borderWidth: 2,
                                    hoverBackgroundColor: '#FF6347',
                                    hoverBorderColor: '#FF6347',
                                    data: newData[0].children.map(
                                        item => item.averageListeningEngagement
                                    ),
                                },
                                {
                                    label:
                                        'Discussion Activity engagement with Smart Screens present- Program Level',
                                    backgroundColor: '#800080',
                                    borderColor: '#800080',
                                    borderWidth: 2,
                                    hoverBackgroundColor: '#800080',
                                    hoverBorderColor: '#800080',
                                    data: newData[0].children.map(
                                        item => item.averageDiscussionEngagement
                                    ),
                                },
                                {
                                    label:
                                        'Average No of Students using Smart Screens- Program Level',
                                    backgroundColor: '#228B22',
                                    borderColor: '#228B22',
                                    borderWidth: 2,
                                    hoverBackgroundColor: '#228B22',
                                    hoverBorderColor: '#228B22',
                                    data: newData[0].children.map(
                                        item => item.noOfStudents
                                    ),
                                },
                            ],
                        }}
                        options={barOptions}
                    />
                ) : (
                    ''
                )}
                {program !== '' &&
                programSpaceDisplay === true &&
                newData[0].children.filter(i => i.name === program)[0]
                    .isSmartScreen === false ? (
                    <h2>
                        <br />
                        Selected physical Attribute is not available for this
                        program, Choose another programs..
                    </h2>
                ) : (
                    ''
                )}
                {program !== '' &&
                course !== '' &&
                courseSpaceDisplay === true &&
                newData[0].children
                    .filter(i => i.name === program)
                    .map(
                        i =>
                            i.children.filter(i => i.name === course)[0]
                                .isSmartScreen
                    )[0] ? (
                    <Bar
                        data={{
                            labels: newData[0].children
                                .filter(i => i.name === program)
                                .map(i =>
                                    i.children
                                        .filter(i => i.name === course)
                                        .map(i => i.name)
                                ),
                            datasets: [
                                {
                                    label:
                                        'Listening Activity engagement with Smart Screens present- Course Level',
                                    backgroundColor: '#FF6347',
                                    borderColor: '#FF6347',
                                    borderWidth: 2,
                                    hoverBackgroundColor: '#FF6347',
                                    hoverBorderColor: '#FF6347',
                                    data: newData[0].children
                                        .filter(i => i.name === program)
                                        .map(i =>
                                            i.children
                                                .filter(i => i.name === course)
                                                .map(
                                                    i =>
                                                        i.averageListeningEngagement
                                                )
                                        ),
                                },
                                {
                                    label:
                                        'Discussion Activity engagement with Smart Screens present- Course Level',
                                    backgroundColor: '#800080',
                                    borderColor: '#800080',
                                    borderWidth: 2,
                                    hoverBackgroundColor: '#800080',
                                    hoverBorderColor: '#800080',
                                    data: newData[0].children
                                        .filter(i => i.name === program)
                                        .map(i =>
                                            i.children
                                                .filter(i => i.name === course)
                                                .map(
                                                    i =>
                                                        i.averageDiscussionEngagement
                                                )
                                        ),
                                },
                                {
                                    label:
                                        'Average No of Students using Smart Screens- Course Level',
                                    backgroundColor: '#228B22',
                                    borderColor: '#228B22',
                                    borderWidth: 2,
                                    hoverBackgroundColor: '#228B22',
                                    hoverBorderColor: '#228B22',
                                    data: newData[0].children
                                        .filter(i => i.name === program)
                                        .map(i =>
                                            i.children
                                                .filter(i => i.name === course)
                                                .map(i => i.noOfStudents)
                                        ),
                                },
                            ],
                        }}
                        options={barOptions}
                    />
                ) : (
                    ''
                )}

                {program !== '' &&
                course !== '' &&
                courseSpaceDisplay === true &&
                newData[0].children
                    .filter(i => i.name === program)
                    .map(
                        i =>
                            i.children.filter(i => i.name === course)[0]
                                .isSmartScreen
                    )[0] === false ? (
                    <h2>
                        <br />
                        Selected physical Attribute is not available for this
                        course, Choose another Course..
                    </h2>
                ) : (
                    ''
                )}
            </div>
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
