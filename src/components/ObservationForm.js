import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';

import uuid from 'uuid/v4';
import {
    addObservation,
    updateObservation,
    removeObservation,
} from '../actions';

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

    removeObservation,
    updateObservation,
}) => {
    const [semester, setSemester] = useState('');
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    const [selectedCourseID, setSelectedCourseID] = useState('');
    const [selectedStaffID, setSelectedStaffID] = useState('');
    const [location, setLocation] = useState('');
    const [numberOfStudents, setNumberofStudents] = useState('');
    const [duration, setDuration] = useState('');
    const [records, setRecords] = useState([]);
    const [listid, setlistitemid] = useState('');
    const [updateWindow, setUpdateWindow] = useState(false);
    const [selectedId, setSelectedID] = useState('');
    const [refreshRecord, setRefreshRecord] = useState('');
    // const [updateStartTime, setUpdateStartTime] = useState('');
    // const [updateEndTime, setUpdateEndTime] = useState('');
    // const [updateStudentActivity, setUpdateStudentActivity] = useState('');
    // const [updateStaffActivity, setUpdateStaffActivity] = useState('');
    // const [updateEngagementTime, setUpdateEngagementTime] = useState('');
    const [updateSemester, setUpdateSemester] = useState('');
    const [updateCourseID, setUpdateCourseID] = useState('');
    const [updateStaffID, setUpdateStaffID] = useState('');
    const [updateLocation, setUpdateLocation] = useState('');
    const [updateDuration, setUpdateDuration] = useState('');
    const [updateNumOfStudents, setUpdateNumOfStudents] = useState('');
    const [updateCurrentDate, setUpdateCurrentDate] = useState('');

    // const recordCounter = 1;

    const [updateRecords, setUpdateRecords] = useState([]);

    const courseFiltered = courses.filter(
        course => course.id === selectedCourseID
    );
    const staffFiltered = staff.filter(staff => staff.id === selectedStaffID);

    const updateCourseFiltered = courses.filter(
        course => course.id === updateCourseID
    );
    const updateStaffFiltered = staff.filter(
        staff => staff.id === updateStaffID
    );

    const selectedCourse = courseFiltered.length > 0 ? courseFiltered[0] : {};
    const selectedStaff = staffFiltered.length > 0 ? staffFiltered[0] : {};

    const updatedCourse =
        updateCourseFiltered.length > 0 ? updateCourseFiltered[0] : {};
    const updatedStaff =
        updateStaffFiltered.length > 0 ? updateStaffFiltered[0] : {};

    console.log('obs', observations);
    console.log(records);
    console.log(selectedId);

    return (
        <div>
            <Dialog
                open={updateWindow}
                aria-labelledby="form-dialog-title"
                fullWidth
                maxWidth="md"
            >
                <DialogTitle id="form-dialog-title">
                    Update Observation Records
                </DialogTitle>
                <DialogContent>
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
                            style={{ marginRight: '25px', width: '35%' }}
                        >
                            <MenuItem value="Semester 1">Semester 1</MenuItem>
                            <MenuItem value="Semester 2">Semester 2</MenuItem>
                        </TextField>
                        <TextField
                            label="Date"
                            type="date"
                            value={updateCurrentDate}
                            onChange={event => {
                                setUpdateCurrentDate(event.target.value);
                            }}
                        />
                        <br />
                        <TextField
                            select
                            label="Select Course Code"
                            value={updateCourseID}
                            onChange={event => {
                                setUpdateCourseID(event.target.value);
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
                            value={updatedCourse.name}
                            margin="normal"
                            variant="outlined"
                            style={{ width: '35%' }}
                        />
                        <br />
                        <TextField
                            select
                            label="Select Instructor"
                            value={updateStaffID}
                            onChange={event => {
                                setUpdateStaffID(event.target.value);
                            }}
                            margin="normal"
                            variant="outlined"
                            style={{ marginRight: '25px', width: '35%' }}
                        >
                            {staff.map(item => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.title} {item.firstname}{' '}
                                    {item.lastname}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Location"
                            type="name"
                            value={updateLocation}
                            margin="normal"
                            variant="outlined"
                            placeholder="413 Learning Innovation Building"
                            style={{ width: '35%' }}
                            onChange={event => {
                                setUpdateLocation(event.target.value);
                            }}
                        />
                        <br />
                        <TextField
                            label="Number of Students"
                            type="number"
                            value={updateNumOfStudents}
                            margin="normal"
                            variant="outlined"
                            style={{ marginRight: '25px', width: '35%' }}
                            onChange={event => {
                                setUpdateNumOfStudents(event.target.value);
                            }}
                        />
                        <TextField
                            label="Duration(mins)"
                            type="number"
                            value={updateDuration}
                            margin="normal"
                            variant="outlined"
                            style={{ marginRight: '25px', width: '35%' }}
                            onChange={event => {
                                setUpdateDuration(event.target.value);
                            }}
                        />
                    </div>
                    <br />
                    {updateRecords && updateRecords.length > 0
                        ? updateRecords.map((record, i) => (
                              <div id={i.valueOf()}>
                                  <TextField
                                      label="Start Time"
                                      value={record.startTime}
                                      margin="normal"
                                      variant="outlined"
                                      placeholder={moment().format('HH:mm')}
                                      onChange={event => {
                                          setRefreshRecord(uuid());
                                          updateRecords.filter(
                                              i => i.id === record.id
                                          )[0].startTime = event.target.value;
                                      }}
                                      style={{
                                          marginRight: '10px',
                                          width: '12%',
                                      }}
                                  />
                                  <TextField
                                      label="End Time"
                                      value={record.endTime}
                                      margin="normal"
                                      variant="outlined"
                                      placeholder={moment().format('HH:mm')}
                                      onChange={event => {
                                          setRefreshRecord(uuid());
                                          updateRecords.filter(
                                              i => i.id === record.id
                                          )[0].endTime = event.target.value;
                                      }}
                                      style={{
                                          marginRight: '10px',
                                          width: '12%',
                                      }}
                                  />
                                  {/* <br /> */}
                                  <TextField
                                      select
                                      label="Student Activity"
                                      value={record.studentActivity}
                                      margin="normal"
                                      variant="outlined"
                                      style={{
                                          marginRight: '10px',
                                          width: '25%',
                                      }}
                                      onChange={event => {
                                          setRefreshRecord(uuid());
                                          updateRecords.filter(
                                              i => i.id === record.id
                                          )[0].studentActivity =
                                              event.target.value;
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
                                      style={{
                                          marginRight: '10px',
                                          width: '25%',
                                      }}
                                      onChange={event => {
                                          setRefreshRecord(uuid());
                                          updateRecords.filter(
                                              i => i.id === record.id
                                          )[0].staffActivity =
                                              event.target.value;
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
                                          updateRecords.filter(
                                              i => i.id === record.id
                                          )[0].engagement = event.target.value;
                                      }}
                                      onBlur={() => {
                                          setUpdateRecords([
                                              ...updateRecords,
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
                                      style={{
                                          //   marginRight: '10px',
                                          width: '15%',
                                      }}
                                  />
                                  <span>
                                      <DeleteIcon
                                          label="Delete Record"
                                          style={{
                                              fontSize: 28,
                                              marginTop: '20px',
                                          }}
                                          onClick={() => {
                                              //   const elemntId = this.document
                                              //       .parent()
                                              //       .closest('div')
                                              //       .attr('id')
                                              //       .split(' ');
                                              //   console.log('element', elemntId);
                                          }}
                                      />
                                  </span>
                              </div>
                          ))
                        : ''}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setUpdateWindow(false);
                            setlistitemid('');
                        }}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onFocus={() => {
                            const updateFilterRecords = updateRecords.filter(
                                record => record.startTime !== ''
                            );
                            updateObservation(
                                listid,
                                updateSemester,
                                updateCurrentDate,
                                updateCourseID,
                                updatedCourse.code,
                                updatedCourse.name,
                                updateStaffID,
                                `${updatedStaff.title} ${
                                    updatedStaff.firstname
                                } ${updatedStaff.lastname}`,
                                updateLocation,
                                updateNumOfStudents,
                                updateDuration,
                                updateFilterRecords
                            );
                            setUpdateWindow(false);
                            setlistitemid('');
                        }}
                        color="primary"
                    >
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
            <Container>
                <div>Class Session Information:</div>
                <div>
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
                        {/* <MenuItem value="Semester 1">Code 1</MenuItem>
                    <MenuItem value="Semester 1">Code 2</MenuItem> */}
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
                        {/* <MenuItem value="Semester 1">Instructor 1</MenuItem>
                    <MenuItem value="Semester 1">Instructor 2</MenuItem> */}
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
                    <FormControl
                    // onChange={event => {
                    //     if (
                    //         event.target.value === 'smart screen' &&
                    //         event.target.checked === true
                    //     ) {
                    //         setSmartScreen(true);
                    //     }
                    //     if (
                    //         event.target.value === 'white board' &&
                    //         event.target.checked === true
                    //     ) {
                    //         setWhiteBoard(true);
                    //     }
                    //     if (
                    //         event.target.value === 'hearing assistance' &&
                    //         event.target.checked === true
                    //     ) {
                    //         setHearingAssistance(true);
                    //     }
                    //     if (
                    //         event.target.value === 'smart screen' &&
                    //         event.target.checked === false
                    //     ) {
                    //         setSmartScreen(false);
                    //     }
                    //     if (
                    //         event.target.value === 'white board' &&
                    //         event.target.checked === false
                    //     ) {
                    //         setWhiteBoard(false);
                    //     }
                    //     if (
                    //         event.target.value === 'hearing assistance' &&
                    //         event.target.checked === false
                    //     ) {
                    //         setHearingAssistance(false);
                    //     }
                    // }}
                    >
                        <FormControlLabel
                            value="smart screen"
                            control={<Checkbox />}
                            label="smart screen"
                            // checked={smartScreen}
                        />
                        <FormControlLabel
                            value="white board"
                            control={<Checkbox />}
                            label="white board"
                            // checked={whiteBoard}
                        />
                        <FormControlLabel
                            value="hearing assistance"
                            control={<Checkbox />}
                            label="hearing assistance"
                            // checked={hearingAssistance}
                        />
                    </FormControl>
                </div>
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
                    disabled={
                        semester === '' ||
                        date === '' ||
                        selectedCourseID === '' ||
                        selectedCourseID.name === '' ||
                        selectedStaffID === '' ||
                        numberOfStudents === ''
                    }
                >
                    Start Observation
                </Button>
                <br />
                {records && records.length > 0
                    ? records.map((record, i) => (
                          <div id={i.valueOf()}>
                              <FormControlLabel
                                  key={record.id}
                                  control={
                                      <Radio
                                          checked={record.id === selectedId}
                                          onChange={event => {
                                              if (
                                                  event.target.checked === true
                                              ) {
                                                  setSelectedID(
                                                      event.target.value
                                                  );
                                              } else {
                                                  setSelectedID('');
                                              }
                                          }}
                                          value={record.id}
                                      />
                                  }
                              />
                              <TextField
                                  label="Start Time"
                                  //   value={record.startTime}
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
                                  //   value={record.endTime}
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
                                  style={{ marginRight: '10px', width: '25%' }}
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
                                  style={{ marginRight: '10px', width: '25%' }}
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
                                  //   value={record.engagement}
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
                              <span>
                                  <DeleteIcon
                                      style={{
                                          fontSize: 32,
                                          marginTop: '25px',
                                      }}
                                      onClick={() => {
                                          setRecords(
                                              records.filter(
                                                  i => i.id !== selectedId
                                              )
                                          );
                                          //   const elemntId = this.document
                                          //       .parent()
                                          //       .closest('div')
                                          //       .attr('class')
                                          //       .split(' ');
                                          //   console.log(this.className);
                                      }}
                                  />
                              </span>
                          </div>
                      ))
                    : ''}
                {records && records.length > 0 ? (
                    <Button
                        variant="contained"
                        color="primary"
                        onFocus={() => {
                            const filterRecords = records.filter(
                                record => record.startTime !== ''
                            );
                            addObservation(
                                uuid(),
                                semester,
                                date,
                                selectedCourseID,
                                selectedCourse.code,
                                selectedCourse.name,
                                selectedStaffID,
                                `${selectedStaff.title} ${
                                    selectedStaff.firstname
                                } ${selectedStaff.lastname}`,
                                location,
                                numberOfStudents,
                                duration,
                                filterRecords
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
                {observations && observations.length > 0 ? (
                    <div>
                        <br />
                        <h4>Followng observations were recorded:</h4>
                        <div>
                            <FormGroup>
                                {observations.map(recordedObs => (
                                    <FormControlLabel
                                        control={
                                            <Radio
                                                color="primary"
                                                checked={
                                                    recordedObs.id === listid
                                                }
                                                value={recordedObs.id}
                                                onChange={event => {
                                                    if (
                                                        event.target.checked ===
                                                        true
                                                    ) {
                                                        setlistitemid(
                                                            event.target.value
                                                        );
                                                        const observationToUpdate = observations.filter(
                                                            i =>
                                                                i.id ===
                                                                event.target
                                                                    .value
                                                        )[0];
                                                        const obsRecordsToUpdate =
                                                            observationToUpdate.records;
                                                        setUpdateSemester(
                                                            observationToUpdate.semester
                                                        );
                                                        setUpdateNumOfStudents(
                                                            observationToUpdate.numberOfStudents
                                                        );
                                                        setUpdateDuration(
                                                            observationToUpdate.duration
                                                        );
                                                        setUpdateCurrentDate(
                                                            observationToUpdate.date
                                                        );
                                                        setUpdateCourseID(
                                                            observationToUpdate.courseId
                                                        );
                                                        setUpdateStaffID(
                                                            observationToUpdate.staffId
                                                        );
                                                        setUpdateLocation(
                                                            observationToUpdate.location
                                                        );
                                                        setUpdateRecords(
                                                            observationToUpdate.records // {
                                                            //     startTime:
                                                            //         obsRecordsToUpdate.startTime,
                                                            //     endTime:
                                                            //         obsRecordsToUpdate.endTime,
                                                            //     studentActivity:
                                                            //         obsRecordsToUpdate.studentActivity,
                                                            //     staffActivity:
                                                            //         obsRecordsToUpdate.staffActivity,
                                                            //     engagement:
                                                            //         obsRecordsToUpdate.engagement,
                                                            // },
                                                        );
                                                    } else {
                                                        setlistitemid('');
                                                    }
                                                }}
                                            />
                                        }
                                        label={`${recordedObs.date} ${
                                            recordedObs.semester
                                        } ${recordedObs.courseCode} ${
                                            recordedObs.courseName
                                        }`}
                                        key={recordedObs.id}
                                    />
                                ))}
                            </FormGroup>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={!listid}
                                onClick={() => {
                                    setUpdateWindow(true);
                                }}
                                style={{ marginRight: '5px' }}
                            >
                                UPDATE Observation
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                disabled={!listid}
                                onClick={() => {
                                    removeObservation(listid);
                                }}
                            >
                                DELETE Observation
                            </Button>
                            <br />
                        </div>
                    </div>
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
        {
            addObservation,
            removeObservation,
            updateObservation,
        }
    )(Observation)
);

Observation.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
