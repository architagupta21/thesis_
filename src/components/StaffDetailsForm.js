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
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {
  addStaffMember,
  removeStaffMember,
  updateStaffMember
} from "../actions";
import { FormGroup } from "@material-ui/core";

const Container = styled.div`
  padding: 20px;
  border: 1px solid lightblue;
`;


const StaffDetailsForm = ({
  addStaffMember,
  removeStaffMember,
  updateStaffMember,
  staff
}) => {
  const [staffObj, setValues] = useState({});
  const [updateStaffObj, UpdatesetValues] = useState({});

  const UpdatedValues = e => {
    UpdatesetValues({
      ...updateStaffObj,
      [e.target.name]: e.target.value
    });
  };
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
      <Dialog open={updateWindow} fullWidth>
        <DialogTitle id="form-dialog-title">
          Update Staff Member Details
        </DialogTitle>
        <DialogContent>
          <div>Enter the title:</div>
          <TextField
            id="outlined-title"
            value={updateStaffObj.title}
            onChange={UpdatedValues}
            label="Title"
            margin="normal"
            variant="outlined"
            name="title"
          />
          <br />
          <div>Enter First Name:</div>
          <TextField
            id="outlined-name"
            value={updateStaffObj.firstname}
            onChange={UpdatedValues}
            name="firstname"
            margin="normal"
            variant="outlined"
            label="First Name"
          />
          <br />
          <div>Enter Last Name:</div>
          <TextField
            id="outlined-name"
            value={updateStaffObj.lastname}
            onChange={UpdatedValues}
            name="lastname"
            margin="normal"
            variant="outlined"
            label="Last Name"
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
                updateStaffObj.title,
                updateStaffObj.firstname,
                updateStaffObj.lastname
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
      {/* <form id="staffForm"> */}
      <TextField
        id="outlined-title"
        label="Title"
        value={staffObj.title !== null ? staffObj.title : ""}
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
        disabled={!(staffObj.title && staffObj.firstname && staffObj.lastname)}
        onClick={() => {
          console.log("Adding staff details:");
          addStaffMember(
            (staffObj.id = uuid()),
            staffObj.title,
            staffObj.firstname,
            staffObj.lastname
          );
          staffObj = ({});
        }}
      >
        ADD STAFF
        </Button>
      <br />
      {/* </form> */}
      <br />
      <br />
      <div>Staff Memebers Added Are: </div>
      {
        staff.map(staffmembers => (
          <FormGroup>
            <FormControlLabel
              control={
                <Radio
                  color="primary"
                  checked={staffmembers.id === listid}
                  value={staffmembers.id}
                  onChange={event => {
                    if (event.target.checked === true) {
                      console.log(event.target.value);
                      setlistitemid(event.target.value);
                      UpdatesetValues(staff.filter(
                        i =>
                          i.id === event.target.value
                      )[0]);
                    } else {
                      setlistitemid("");
                    }
                  }}
                />
              }
              label={staffmembers.firstname + " " + staffmembers.lastname}
            >
            </FormControlLabel>
          </FormGroup>
        ))
      }
      <br /> <br />
      <Button
        variant="contained"
        color="primary"
        disabled={!(listid)}
        onClick={() => {
          setUpdateWindow(true);
          // console.log('button', staffObj.title);
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
      {/* </FormControl> */}
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
