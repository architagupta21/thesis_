import React, { Component } from 'react';

class AddSessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'type',
            code: 'code',
            datetime: 'string',
            duration: 'string',
            locations: 'string',
            equipment: ['strings', 'string2'],
        };
    }

    render() {
        const { type, code } = this.state;

        return (
            <div>
                My Form
                <input
                    type="text"
                    onChange={e => {
                        console.log(e.target.value);
                        this.setState({ type: e.target.value });
                    }}
                    value={type}
                />
                <input
                    type="text"
                    onChange={e => {
                        console.log(e.target.value);
                        this.setState({ code: e.target.value });
                    }}
                    value={code}
                />
            </div>
        );
    }
}

export default AddSessionForm;

// session type - Lecture, tutorial... etc
// session code - L1, P02 ..
// datetime - 13/03/2019 4pm
// duration - 02:30
// location - building 17, room 305
// equipment - + add more
