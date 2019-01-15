import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AddSessionForm from './AddSessionForm';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

class SettingsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sessions: [
                {
                    type: 'string',
                    code: 'str5ing',
                    datetime: 'string',
                    duration: 'string',
                    locations: 'string',
                    equipment: ['strings', 'string2'],
                },
            ],
        };
    }

    render() {
        const { sessions } = this.state;

        // this.setState(sessions:[...this.state.sessions, {}]) - spread operator, ensures immutablity

        return (
            <Container>
                Settings Page:
                <div>
                    <AddSessionForm />
                </div>
            </Container>
        );
    }
}

export default withRouter(
    connect(
        state => ({}),
        {}
    )(SettingsPage)
);

SettingsPage.propTypes = {};

// import React, { Component } from 'react';

// class DataEntryPage extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {};
//     }

//     render() {
//         return <div>Data Entry Page</div>;
//     }
// }

// export default DataEntryPage;

//

// session type - Lecture, tutorial... etc
// session code - L1, P02 ..
// datetime - 13/03/2019 4pm
// duration - 02:30
// location - building 17, room 305
// equipment - + add more

/** 
  
define sessions
define activites - checkbox staff, student
define engagements - checkbox staff, student




*/
