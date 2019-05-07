import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { setCountDefault, setSaveFalse, addStaffMember } from '../actions';
import AddStaffDetailsFormComponent from '../components/AddStaffDetailsForm';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const DefaultCountInput = styled.input`
    margin-left: 10px;
`;

const Admin = ({ history, setCountDefault, defaultCountFromRedux, staff }) => {
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
                <div>{<div>{person.firstname}</div>}</div>
            ))}
            <br />
            <br />
            <br />
            <AddStaffDetailsFormComponent />
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
        {
            setCountDefault,
            setSaveFalse,
            addStaffMember,
            AddStaffDetailsFormComponent,
        }
    )(Admin)
);

Admin.propTypes = {
    defaultCountFromRedux: PropTypes.number.isRequired,
    setCountDefault: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired,
};
