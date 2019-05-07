import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import uuid from 'uuid/v4';
import {
    setCountDefault,
    setSaveFalse,
    addStaffMember,
    addActivity,
    removeActivity,
    updateActivity,
} from '../actions';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const DefaultCountInput = styled.input`
    margin-left: 10px;
`;

// https://reactjs.org/docs/hooks-intro.html
const Admin = ({
    history,
    setCountDefault,
    defaultCountFromRedux,
    addStaffMember,
    staff,
    activity,
    addActivity,
    removeActivity,
    updateActivity,
}) => {
    const [defaultCount, setDefaultCount] = useState(defaultCountFromRedux);
    const [activityName, setActivityName] = useState('');
    const [staffActivity, setStaffActivity] = useState(true);
    const [selectedId, setSelectedId] = useState('');
    const [updateWindow, setUpdateWindow] = useState(false);

    const staffActivities = activity.filter(type => type.staff);
    const studentActivities = activity.filter(type => type.student);

    console.log('MY STAFF:', staff);
    console.log('MY ACTIVITY:', activity);

    return (
        <Container>
            <Dialog
                open={updateWindow}
                // onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth
            >
                <DialogTitle id="form-dialog-title">
                    Update Activity
                </DialogTitle>
                <DialogContent>
                    <TextField
                        label="Activity Name"
                        value={activityName}
                        onChange={event => {
                            setActivityName(event.target.value);
                        }}
                        fullWidth
                    />
                    <RadioGroup
                        onChange={event => {
                            if (event.target.value === 'staff') {
                                setStaffActivity(true);
                            } else {
                                setStaffActivity(false);
                            }
                        }}
                    >
                        <FormControlLabel
                            value="staff"
                            control={<Radio />}
                            label="Staff"
                        />
                        <FormControlLabel
                            value="student"
                            control={<Radio />}
                            label="Student"
                        />
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setUpdateWindow(false);
                        }}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            updateActivity(
                                selectedId,
                                activityName,
                                staffActivity,
                                !staffActivity
                            );
                            setUpdateWindow(false);
                        }}
                        color="primary"
                    >
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
            Default Count Value:
            <DefaultCountInput
                type="number"
                value={defaultCount}
                onChange={event => {
                    setDefaultCount(event.target.value);
                }}
            />
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        console.log('I WANT TO SAVFE');
                        setCountDefault(parseInt(defaultCount, 10));
                        history.push('/');
                    }}
                >
                    Save Changes
                </Button>
            </div>
            <br />
            <br />
            <br />
            {staff.map(person => (
                <div>
                    <div>{person.id}</div>
                </div>
            ))}
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    console.log('ADD STAFF BUTTOn');
                    addStaffMember(uuid(), 'prof', 'random', 'person');
                }}
            >
                ADD RANDOM STAFF
            </Button>
            <br />
            <br />
            <Container>
                <TextField
                    label="New Activity"
                    onChange={event => {
                        setActivityName(event.target.value);
                    }}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
                <br />
                <RadioGroup
                    onChange={event => {
                        if (event.target.value === 'staff') {
                            setStaffActivity(true);
                        } else {
                            setStaffActivity(false);
                        }
                    }}
                >
                    <FormControlLabel
                        value="staff"
                        control={<Radio />}
                        label="Staff"
                    />
                    <FormControlLabel
                        value="student"
                        control={<Radio />}
                        label="Student"
                    />
                </RadioGroup>
                <br />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        addActivity(
                            uuid(),
                            activityName,
                            staffActivity,
                            !staffActivity
                        );
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
                                    <Checkbox
                                        checked={item.id === selectedId}
                                        onChange={event => {
                                            if (event.target.checked === true) {
                                                setSelectedId(
                                                    event.target.value
                                                );
                                                setActivityName(
                                                    activity.filter(
                                                        i =>
                                                            i.id ===
                                                            event.target.value
                                                    )[0].name
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
                        onClick={() => {
                            setUpdateWindow(true);
                        }}
                    >
                        UPDATE ACTIVITY
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
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
                                    <Checkbox
                                        checked={item.id === selectedId}
                                        onChange={event => {
                                            if (event.target.checked === true) {
                                                setSelectedId(
                                                    event.target.value
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
                        onClick={() => {
                            setUpdateWindow(true);
                        }}
                    >
                        UPDATE ACTIVITY
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            removeActivity(selectedId);
                        }}
                    >
                        DELETE ACTIVITY
                    </Button>
                </Container>
            </Container>
        </Container>
    );
};

// class Admin extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             defaultCount: props.defaultCount,
//         };
//     }

//     render() {
//         const { defaultCount } = this.state;
//         const { setCountDefault, history } = this.props;
//         return (
//             <Container>
//                 Default Count Value:
//                 <DefaultCountInput
//                     type="number"
//                     value={defaultCount}
//                     onChange={event => {
//                         this.setState({
//                             defaultCount: event.target.value,
//                         });
//                     }}
//                 />
//                 <div>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => {
//                             console.log('I WANT TO SAVFE');
//                             setCountDefault(parseInt(defaultCount, 10));
//                             history.push('/');
//                         }}
//                     >
//                         Save Changes
//                     </Button>
//                 </div>
//             </Container>
//         );
//     }
// }

export default withRouter(
    connect(
        state => ({
            save: state.save,
            defaultCountFromRedux: state.defaultCount,
            staff: state.staff,
            activity: state.activity,
        }),
        {
            setCountDefault,
            setSaveFalse,
            addStaffMember,
            addActivity,
            removeActivity,
            updateActivity,
        }
    )(Admin)
);

Admin.propTypes = {
    defaultCountFromRedux: PropTypes.number.isRequired,
    setCountDefault: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired,
};
