import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import uuid from 'uuid/v4';

const DataEntryNewRow = () => {
    const [newRow, setNewRow] = useState(false);
    function renderNewRow() {
        if (newRow) {
            return (
                <div>
                    <DataEntryNewRow />
                </div>
            );
        }
        return null;
    }
    return (
        <div>
            <TextField
                label="Field1"
                type="email"
                name="email"
                margin="normal"
                variant="outlined"
                style={{ margin: '10px' }}
            />
            <TextField
                label="Field3"
                type="email"
                name="email"
                margin="normal"
                variant="outlined"
                style={{ margin: '10px' }}
            />
            <TextField
                label="Field4"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                style={{ margin: '10px' }}
                onBlur={() => {
                    if (newRow === false) {
                        setNewRow(true);
                    }
                }}
            />
            {renderNewRow()}
            {console.log('bool new row', newRow)}
        </div>
    );
};

export default withRouter(
    connect(state => ({
        save: state.save,
    }))(DataEntryNewRow)
);

DataEntryNewRow.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
