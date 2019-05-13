import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import uuid from "uuid/v4";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {
  addStaffMember,
  removeStaffMember,
  updateStaffMember
} from "../actions";
import { FormHelperText } from "@material-ui/core";

const Container = styled.div`
  padding: 20px;
  border: 1px solid lightblue;
`;


// const StaffData = () => ({
//   id: "1",
//   title: "Mr",
//   firstname: "First1",
//   lastname: "Last1",
// },
//   {
//     id: "2",
//     title: "Mr",
//     firstname: "First2",
//     lastname: "Last2",
//   },
//   {
//     id: "3",
//     title: "Ms",
//     firstname: "First3",
//     lastname: "Last3",
//   },
//   {
//     id: "4",
//     title: "Ms",
//     firstname: "First4",
//     lastname: "Last4",
//   });


const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

const StaffDetailsForm = ({
  addStaffMember,
  removeStaffMember,
  updateStaffMember,
  staff
}) => {
  var [staffObj, setValues] = useState({
    id: "",
    title: "",
    firstname: "",
    lastname: ""
  });
  const [updateWindow, setUpdateWindow] = useState(false);
  const [listid, setlistitemid] = useState("");
  const updateFields = e => {
    setValues({
      ...staffObj,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Container>
      <Dialog open={updateWindow} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">
          Update Staff Member Details
        </DialogTitle>
        <DialogContent>
          <div>Enter the title:</div>
          <TextField
            id="outlined-title"
            value={staffObj.title}
            onChange={updateFields}
            name="title"
            margin="normal"
            variant="outlined"
          />
          <br />
          <div>Enter First Name:</div>
          <TextField
            id="outlined-name"
            value={staffObj.firstname}
            onChange={updateFields}
            name="firstname"
            margin="normal"
            variant="outlined"
          />
          <br />
          <div>Enter Last Name:</div>
          <TextField
            id="outlined-name"
            value={staffObj.lastname}
            onChange={updateFields}
            name="lastname"
            margin="normal"
            variant="outlined"
          />
          <br />
          <br />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setUpdateWindow(false);
              setlistitemid("");
            }}
            color="primary"
          >
            Close
          </Button>
          <Button
            onClick={() => {
              updateStaffMember(
                listid,
                staffObj.title,
                staffObj.firstname,
                staffObj.lastname
              );
              setUpdateWindow(false);
              setlistitemid("");
            }}
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
      <div>Staff Details Form:</div>
      <form id="staffForm">
        <TextField
          id="outlined-title"
          label="Title"
          value={staffObj.title}
          onChange={updateFields}
          name="title"
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-name"
          label="First Name"
          value={staffObj.firstname}
          onChange={updateFields}
          name="firstname"
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-lastname"
          label="Last Name"
          value={staffObj.lastname}
          onChange={updateFields}
          name="lastname"
          margin="normal"
          variant="outlined"
        />
        <br />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={e => {
            console.log("Adding staff details:");
            addStaffMember(
              (staffObj.id = uuid()),
              staffObj.title,
              staffObj.firstname,
              staffObj.lastname
            );
            setlistitemid(staffObj.id);
            console.log("Staff Added!");

          }}
        >
          ADD STAFF
        </Button>
        <br />
      </form>
      <br />
      <br />
      <FormControl component="fieldset">
        <FormLabel component="legend">Staff Memebers Added Are: </FormLabel>
        <RadioGroup aria-label="staff-details" onChange={updateFields}>
          {staff.map(staffmembers => (
            <FormControlLabel
              value={staffmembers.id}
              control={
                <Radio
                  color="primary"
                  checked={staffmembers.id === listid}
                  value={staffmembers.id}
                  onChange={event => {
                    if (event.target.checked === true) {
                      setlistitemid(event.target.value);
                      console.log(staffObj);
                      setValues(staff.filter(
                        i =>
                          i.id === listid
                      ));         // staff.filter/
                      // staffObj = (staff.filter(
                      //   i =>
                      //     i.id === listid
                      // ));
                      console.log('update staffobj ', staffObj)
                    } else {
                      setlistitemid("");
                    }
                  }}
                />
              }
              label={staffmembers.firstname + " " + staffmembers.lastname}
            >
            </FormControlLabel>
          ))}
        </RadioGroup>

        <br /><br />
        <Button
          variant="contained"
          color="primary"
          disabled={!(listid)}
          onClick={() => {
            setUpdateWindow(true);
            console.log('button', staffObj);
          }}
        >
          UPDATE STAFF RECORD
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          disabled={!(listid)}
          onClick={() => {
            removeStaffMember(listid);
          }}
        >
          DELETE STAFF RECORD
        </Button>
        <br />
        <br />
      </FormControl>
    </Container >
  );
};

export default withRouter(
  connect(
    state => ({
      staff: state.staff
    }),
    {
      addStaffMember,
      updateStaffMember,
      removeStaffMember
    }
  )(StaffDetailsForm)
);
