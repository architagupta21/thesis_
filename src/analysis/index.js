/* eslint-disable camelcase */
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';
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
    const legendOpts = {
        display: true,
        position: 'bottom',
        fullWidth: true,
        reverse: false,
        // labels: {
        //     fontColor: 'rgb(255, 99, 132)',
        // },
    };

    const StudentEngagementDataProgram = {
        labels: barLabels,
        datasets: [
            {
                label: `Student Engagement- ${studentActivity} During a Semester for Program`,
                backgroundColor: barColor,
                borderColor: barColor,
                borderWidth: 2,
                hoverBackgroundColor: barColor,
                hoverBorderColor: barColor,
                data: [65, 70, 80, 81, 90, 91, 95, 83, 70, 58, 44, 22],
            },
        ],
    };

    const StudentEngagementDataProgram_Pie = {
        labels: [
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
        ],
        datasets: [
            {
                backgroundColor: multiColor,
                borderColor: multiColor,
                borderWidth: 5,
                data: [65, 70, 80, 81, 90, 91, 95, 83, 70, 58, 44, 22],
            },
        ],
        legend: legendOpts,
    };

    const StudentEngagementDataCourse = {
        labels: barLabels,
        datasets: [
            {
                label: 'Student Engagement During a Semester for Course',
                backgroundColor: barColor,
                borderColor: barColor,
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: barColor,
                data: [55, 20, 70, 41, 30, 81, 85, 73, 60, 48, 34, 22],
            },
        ],
    };

    const StaffEngagementDataProgram = {
        labels: barLabels,
        datasets: [
            {
                label: 'Staff Engagement During a Semester in a Program',
                backgroundColor: barColor,
                borderColor: barColor,
                borderWidth: 2,
                hoverBackgroundColor: barColor,
                hoverBorderColor: barColor,
                data: [45, 10, 40, 71, 40, 81, 85, 23, 30, 48, 34, 22],
            },
        ],
    };

    const StaffEngagementDataCourse = {
        labels: barLabels,
        datasets: [
            {
                label: `Staff ${staffActicity} Engagement During a Semester for Course`,
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
                label: `Student ${studentActivity} Engagement During a Semester in a Program`,
                backgroundColor: 'rgba(300, 46, 76)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [25, 40, 20, 31, 10, 31, 25, 43, 50, 48, 24, 12],
            },
            {
                label: `Staff ${staffActicity} Engagement During a Semester for Program`,
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
                label: `Student ${studentActivity} Engagement During a Semester in a Course`,
                backgroundColor: 'rgba(300, 46, 76)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [55, 60, 70, 71, 80, 81, 85, 73, 60, 48, 34, 22],
            },
            {
                label: `Staff ${staffActicity} Engagement During a Semester in a Course`,
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

                <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: '95px' }}
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
                        setProgram('');
                        setCourse('');
                        setObData('');
                    }}
                >
                    Clear Data
                </Button>
            </div>
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
                            <h2>
                                Students and staffs engagement in one session:
                            </h2>
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
                            <h2>
                                Students learning activities in one session:
                            </h2>
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
                {programEngagementDisplay === true ? (
                    <Bar data={StudentEngagementDataProgram} />
                ) : (
                    ''
                )}
                {/* {programEngagementDisplay === true ? (
                    <Pie data={StudentEngagementDataProgram_Pie} />
                ) : (
                    ''
                )} */}
                {programEngagementDisplay === true ? (
                    <Doughnut data={StudentEngagementDataProgram_Pie} />
                ) : (
                    ''
                )}
                {courseEngagementDisplay === true ? (
                    <Bar data={StudentEngagementDataCourse} />
                ) : (
                    ''
                )}
                {staffprogramEngagementDisplay === true ? (
                    <Bar data={StaffEngagementDataProgram} />
                ) : (
                    ''
                )}
                {staffcourseEngagementDisplay === true ? (
                    <Bar data={StaffEngagementDataCourse} />
                ) : (
                    ''
                )}
                {programEngagement_studentStaff === true ? (
                    <Bar data={ProgramStudentStaffEngagement} />
                ) : (
                    ''
                )}
                {courseEngagement_studentStaff === true ? (
                    <Bar data={CourseStudentStaffEngagement} />
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
