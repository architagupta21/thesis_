import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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
import { addProgram, removeProgram, updateProgram } from '../actions';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const ProgramForm = ({
    programs,
    addProgram,
    removeProgram,
    updateProgram,
}) => {
    const [programName, setProgramName] = useState('');
    const [programLevel, setProgramLevel] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [updateWindow, setUpdateWindow] = useState(false);
    const [updateProgramName, setUpdateProgramName] = useState('');
    const [updateProgramLevel, setUpdateProgramLevel] = useState('');

    return (
        <Container>
            <Dialog
                open={updateWindow}
                aria-labelledby="form-dialog-title"
                fullWidth
            >
                <DialogTitle id="form-dialog-title">Update Program</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Program Name"
                        value={updateProgramName}
                        onChange={event => {
                            setUpdateProgramName(event.target.value);
                        }}
                        fullWidth
                    />
                    <FormControl
                        onChange={event => {
                            if (
                                event.target.value === 'undergraduate' &&
                                event.target.checked === true
                            ) {
                                setUpdateProgramLevel('undergraduate');
                            }
                            if (
                                event.target.value === 'postgraduate' &&
                                event.target.checked === true
                            ) {
                                setUpdateProgramLevel('postgraduate');
                            }
                        }}
                    >
                        <FormControlLabel
                            value="undergraduate"
                            control={<Radio />}
                            label="Undergraduate"
                            checked={updateProgramLevel === 'undergraduate'}
                        />
                        <FormControlLabel
                            value="postgraduate"
                            control={<Radio />}
                            label="Postgraduate"
                            checked={updateProgramLevel === 'postgraduate'}
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setUpdateWindow(false);
                            setSelectedId('');
                        }}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            updateProgram(
                                selectedId,
                                updateProgramName,
                                updateProgramLevel
                            );
                            setUpdateWindow(false);
                            setSelectedId('');
                        }}
                        color="primary"
                    >
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
            <TextField
                onChange={event => {
                    setProgramName(event.target.value);
                }}
                margin="normal"
                variant="outlined"
                placeholder="Bachelor of Engineering"
                value={programName}
                fullWidth
            />
            <FormControl
                onChange={event => {
                    if (
                        event.target.value === 'undergraduate' &&
                        event.target.checked === true
                    ) {
                        setProgramLevel('undergraduate');
                    }
                    if (
                        event.target.value === 'postgraduate' &&
                        event.target.checked === true
                    ) {
                        setProgramLevel('postgraduate');
                    }
                }}
            >
                <FormControlLabel
                    value="undergraduate"
                    control={<Radio />}
                    label="Undergraduate"
                    checked={programLevel === 'undergraduate'}
                />
                <FormControlLabel
                    value="postgraduate"
                    control={<Radio />}
                    label="Postgraduate"
                    checked={programLevel === 'postgraduate'}
                />
            </FormControl>
            <br />
            <Button
                variant="contained"
                color="secondary"
                disabled={!programName}
                onClick={() => {
                    addProgram(uuid(), programName, programLevel);
                    setProgramName('');
                    setProgramLevel('');
                }}
            >
                ADD PROGRAM
            </Button>
            <br />
            <br />
            <Container>
                <div>Current Programs:</div>
                {programs.map(item => (
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={item.id === selectedId}
                                    onChange={event => {
                                        if (event.target.checked === true) {
                                            setSelectedId(event.target.value);
                                            setUpdateProgramName(
                                                programs.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].name
                                            );
                                            setUpdateProgramLevel(
                                                programs.filter(
                                                    i =>
                                                        i.id ===
                                                        event.target.value
                                                )[0].level
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
                    disabled={
                        !(
                            selectedId &&
                            programs.filter(e => e.id === selectedId).length > 0
                        )
                    }
                    onClick={() => {
                        setUpdateWindow(true);
                    }}
                >
                    UPDATE PROGRAM
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={
                        !(
                            selectedId &&
                            programs.filter(e => e.id === selectedId).length > 0
                        )
                    }
                    onClick={() => {
                        removeProgram(selectedId);
                    }}
                >
                    DELETE PROGRAM
                </Button>
            </Container>
        </Container>
    );
};

export default withRouter(
    connect(
        state => ({
            programs: state.programs,
        }),
        {
            addProgram,
            removeProgram,
            updateProgram,
        }
    )(ProgramForm)
);

ProgramForm.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
