import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ComponentContainer = styled.div``;

class CreateProgramPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 'Default Value',
        };
    }

    render() {
        console.log('App Props: ', this.props);

        const { programExists } = this.props;

        const { inputValue } = this.state;

        return (
            <ComponentContainer>
                Create Program Page {JSON.stringify(programExists)}
                <input
                    onChange={event => {
                        console.log(event.target.value);
                        this.setState({
                            inputValue: event.target.value,
                        });
                    }}
                    value={inputValue}
                />
                <button
                    type="button"
                    onClick={event => {
                        console.log(inputValue);
                    }}
                >
                    Show me the value
                </button>
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
