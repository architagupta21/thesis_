import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const Observation = ({ observations }) => {
    const [semester, setSemester] = useState('');

    return (
        <div>
            <h1>Class session information:</h1>
            <FormControl style={{ minWidth: 120 }}>
                <InputLabel>Semester</InputLabel>
                <Select
                    value={semester}
                    placeholder="Semester 1"
                    onChange={event => {
                        setSemester(event.target.value);
                    }}
                >
                    <MenuItem value="Semester 1">Semester1</MenuItem>
                    <MenuItem value="Semester 2">Semester2</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};
export default withRouter(
    connect(state => ({
        save: state.save,
    }))(Observation)
);

Observation.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
