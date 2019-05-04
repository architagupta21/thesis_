import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import uuid from 'uuid/v4';
import {
    setCountDefault,
    setSaveFalse,
    addStaffMember,
    addActivity,
} from '../actions';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const DefaultCountInput = styled.input`
    margin-left: 10px;
`;

const activityObject = {
    activity: '',
    staff: Boolean,
    student: Boolean,
};

const activityName = event => {
    activityObject.activity = event.target.value;
};

const activityType = event => {
    console.log(event.target.value);
    if (event.target.value === 'staff') {
        activityObject.staff = true;
        activityObject.student = false;
    }
    if (event.target.value === 'student') {
        activityObject.staff = false;
        activityObject.student = true;
    }
};
// https://reactjs.org/docs/hooks-intro.html
const Admin = ({
    history,
    setCountDefault,
    defaultCountFromRedux,
    addStaffMember,
    staff,
    activity,
    addActivity,
}) => {
    const [defaultCount, setDefaultCount] = useState(defaultCountFromRedux);

    console.log('MY STAFF:', staff);
    console.log('MY ACTIVITY:', activity);

    return (
        <Container>
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
                    label="Activity"
                    onChange={activityName}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
                <br />
                <RadioGroup onChange={activityType}>
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
                <br />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        addActivity(
                            uuid(),
                            activityObject.activity,
                            activityObject.staff,
                            activityObject.student
                        );
                    }}
                >
                    ADD ACTIVITY
                </Button>
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
        { setCountDefault, setSaveFalse, addStaffMember, addActivity }
    )(Admin)
);

Admin.propTypes = {
    defaultCountFromRedux: PropTypes.number.isRequired,
    setCountDefault: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired,
};
