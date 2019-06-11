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

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

// let listitemval = [];
const DataEntryComp = () => {
    const [newRow, setNewRow] = useState(false);
    const [updateSemester, setUpdateSemester] = useState(' Choose Semester');
    const [anchorEl, setAnchorEl] = React.useState(null);
    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }
    // eslint-disable-next-line prefer-const
    let rowArrayList = [];
    const isNewRowNeeded = () => {
        setNewRow(true);
        rowArrayList.push(<div>Hello1</div>);
    };

    // fetch('https://swapi.co/api/planets/')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.results);
    //         listitemval = data.results;
    //     })
    //     .then(() => {
    //         console.log('list items: ', listitemval[0]);
    //     });

    // eslint-disable-next-line prefer-const
    let listItemsSample = {
        0: [
            { value: 'New', onclick: 'CreateNewDoc()' },
            { value: 'Open', onclick: 'OpenDoc()' },
            { value: 'Close', onclick: 'CloseDoc()' },
        ],
    };

    const DataEntryList = {
        semester: [{ value: 'Semester 1' }, { value: 'Semester 2' }],
        year: [
            { value: 2015 },
            { value: 2065 },
            { value: 2017 },
            { value: 2018 },
            { value: 2019 },
        ],
    };

    // console.log('length is: ', listitemval.length);

    return (
        <form>
            <TextField
                id="outlined-email-input"
                label="Field1"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                style={{ margin: '10px' }}
            />
            <TextField
                id="outlined-email-input"
                label="Field3"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                style={{ margin: '10px' }}
            />
            <TextField
                id="outlined-email-input"
                label="Field4"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                style={{ margin: '10px' }}
            />
            {/* <br /> */}
            {newRow ? rowArrayList.map(eachRow => <div>{eachRow}</div>) : null}

            <Button
                onClick={() => {
                    // setNewRow(false);
                    alert('Button is Hit!!');
                    isNewRowNeeded();
                }}
                color="primary"
            >
                Add New Entry
            </Button>

            <br />
            <div>
                <span style={{ marginRight: '15px' }}>Semester:</span>
                <span>
                    <FormControl style={{ minWidth: 120 }}>
                        <InputLabel>Semester</InputLabel>
                        <Select
                            value={updateSemester}
                            onChange={event => {
                                setUpdateSemester(event.target.value);
                            }}
                        >
                            {DataEntryList.semester.map(val => (
                                <MenuItem value={val.value} key={uuid()}>
                                    {val.value}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <div>
                        <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                            // value={anchorEl}
                        >
                            {updateSemester}
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {DataEntryList.semester.map(val => (
                                <StyledMenuItem
                                    primary={val.value}
                                    key={uuid()}
                                    onChange={event => {
                                        setUpdateSemester(event.target.value);
                                    }}
                                >
                                    {val.value}
                                    {/* {setUpdateSemester(val.value)} */}
                                </StyledMenuItem>
                            ))}
                            {/* <StyledMenuItem>
                                
                                <ListItemText primary="Sent mail" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                              
                                <ListItemText primary="Drafts" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                
                                <ListItemText primary="Inbox" />
                            </StyledMenuItem>
                        </StyledMenu> */}
                        </StyledMenu>
                    </div>
                </span>
            </div>
            <br />
            {/* <FormControl style={{ minWidth: 120 }}>
                <InputLabel>Units</InputLabel>
                <Select value="testValue">
                    {listItemsSample[0].map(val => (
                        <MenuItem value={val.value} key={uuid()}>
                            {val.value}
                        </MenuItem>
                        // <div>{val.value}</div>
                    ))}
                </Select>
            </FormControl> */}
        </form>
    );
};
export default withRouter(
    connect(state => ({
        save: state.save,
    }))(DataEntryComp)
);

DataEntryComp.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
