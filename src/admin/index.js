import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import uuid from 'uuid/v4';
import TextField from '@material-ui/core/TextField';
import { setCountDefault, setSaveFalse, addStaffMember } from '../actions';
// import AddStaffDetailsForm from '../components/AddStaffDetailsForm';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const DefaultCountInput = styled.input`
    margin-left: 10px;
`;
const staffObj = {
    fname: '',
    lname: '',
    title: '',
};

const onFNameChange = event => {
    staffObj.fname = event.target.value;
};

const onLNameChange = event => {
    staffObj.lname = event.target.value;
};

const onTitleChange = event => {
    staffObj.title = event.target.value;
};

const Admin = ({
    history,
    setCountDefault,
    defaultCountFromRedux,
    addStaffMember,
    staff,
}) => {
    const [defaultCount, setDefaultCount] = useState(defaultCountFromRedux);
    console.log('MY STAFF:', staff);
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
                        console.log('I WANT TO SAVE');
                        setCountDefault(parseInt(defaultCount, 10));
                        history.push('/');
                    }}
                >
                    Save Changes
                </Button>
            </div>
            {staff.map(person => (
                <div>
                    <div>{person.id}</div>
                </div>
            ))}
            {/* <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    console.log('ADD STAFF BUTTOn');
                    addStaffMember(uuid(), 'prof', 'random', 'person');
                }}
            >
                ADD RANDOM STAFF
            </Button> */}
            <br />
            <br />
            <br />
            {/* <AddStaffDetailsForm /> */}
            <form>
                <TextField
                    id="outlined-name"
                    label="Title"
                    onChange={onTitleChange}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-name"
                    label="First Name"
                    onChange={onFNameChange}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-name"
                    label="Last Name"
                    onChange={onLNameChange}
                    margin="normal"
                    variant="outlined"
                />
                <br />

                <br />
                <br />

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        console.log('Adding staff details:');
                        addStaffMember(
                            uuid(),
                            staffObj.title,
                            staffObj.fname,
                            staffObj.lname
                        );
                    }}
                >
                    ADD STAFF
                </Button>
            </form>
        </Container>
    );
};
export default withRouter(
    connect(
        state => ({
            save: state.save,
            defaultCountFromRedux: state.defaultCount,
            staff: state.staff,
        }),
        { setCountDefault, setSaveFalse, addStaffMember }
    )(Admin)
);

Admin.propTypes = {
    defaultCountFromRedux: PropTypes.number.isRequired,
    setCountDefault: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired,
};
