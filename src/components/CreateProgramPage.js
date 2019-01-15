import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateProgramForm from './CreateProgramForm';

const ComponentContainer = styled.div``;

class CreateProgramPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coordinatorId: '',
            year: '',
            semester: '',
            coordinatorIdInput: '',
        };
    }

    render() {
        console.log('App Props: ', this.props);

        const { programExists } = this.props;

        const { coordinatorId } = this.state;
        const { year } = this.state;
        const { semester } = this.state;

        const { coordinatorIdInput } = this.state;

        return (
            <ComponentContainer>
                The Offering does not exist. Fill the details below to create a
                new offering {JSON.stringify(programExists)}
                <br />
                Coordinator Staff ID
                <input
                    onChange={event => {
                        console.log(event.target.value);
                        this.setState({
                            coordinatorId: event.target.value,
                        });
                    }}
                    value={coordinatorId}
                />
                <br />
                Year
                <input
                    onChange={event => {
                        console.log(event.target.value);
                        this.setState({
                            year: event.target.value,
                        });
                    }}
                    value={year}
                />
                <br />
                Semester
                <input
                    onChange={event => {
                        console.log(event.target.value);
                        this.setState({
                            semester: event.target.value,
                        });
                    }}
                    value={semester}
                />
                <br />
                <button
                    type="button"
                    onClick={() => {
                        console.log(coordinatorId);
                        console.log(year);
                        console.log(semester);
                    }}
                >
                    Save
                </button>
                <br />
                <br />
                <br />
                <br />
                <CreateProgramForm
                    InputOnChange={text => {
                        this.setState({ coordinatorIdInput: text });
                    }}
                />
            </ComponentContainer>
        );
    }
}

CreateProgramPage.propTypes = {
    programExists: PropTypes.bool,
};

CreateProgramPage.defaultProps = {
    programExists: false,
};

export default withRouter(
    connect(
        state => {
            const { programExists } = state;
            return {
                programExists,
            };
        },
        {}
    )(CreateProgramPage)
);
