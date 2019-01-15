import React from 'react';

class CreateProgramForm extends React.Component {
    render() {
        const { InputOnChange } = this.props;

        return (
            <div>
                <input
                    type="text"
                    onChange={event => {
                        InputOnChange(event.target.value);
                    }}
                />
            </div>
        );
    }
}
export default CreateProgramForm;
