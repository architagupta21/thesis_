import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import uuid from 'uuid/v4';
import ActivityForm from '../components/ActivityForm';
import ProgramForm from '../components/ProgramForm';
import { setCountDefault, setSaveFalse, addStaffMember } from '../actions';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const DefaultCountInput = styled.input`
    margin-left: 10px;
`;

// https://reactjs.org/docs/hooks-intro.html
const Admin = ({
    history,
    setCountDefault,
    defaultCountFromRedux,
    addStaffMember,
    staff,
}) => {
    const [defaultCount, setDefaultCount] = useState(defaultCountFromRedux);

    console.log('MY STAFF:', staff);

    return (
        <Container>
            Default Count Value:
            <DefaultCountInput
                type="number"
                value={defaultCount}
                onChange={event => {
                    setDefaultCount(event.target.value);
                }}
            />
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        console.log('I WANT TO SAVFE');
                        setCountDefault(parseInt(defaultCount, 10));
                        history.push('/');
                    }}
                >
                    Save Changes
                </Button>
            </div>
            <br />
            <br />
            <br />
            {staff.map(person => (
                <div>
                    <div>{person.id}</div>
                </div>
            ))}
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    console.log('ADD STAFF BUTTOn');
                    addStaffMember(uuid(), 'prof', 'random', 'person');
                }}
            >
                ADD RANDOM STAFF
            </Button>
            <ActivityForm />
            <ProgramForm />
        </Container>
    );
};

// class Admin extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             defaultCount: props.defaultCount,
//         };
//     }

//     render() {
//         const { defaultCount } = this.state;
//         const { setCountDefault, history } = this.props;
//         return (
//             <Container>
//                 Default Count Value:
//                 <DefaultCountInput
//                     type="number"
//                     value={defaultCount}
//                     onChange={event => {
//                         this.setState({
//                             defaultCount: event.target.value,
//                         });
//                     }}
//                 />
//                 <div>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => {
//                             console.log('I WANT TO SAVFE');
//                             setCountDefault(parseInt(defaultCount, 10));
//                             history.push('/');
//                         }}
//                     >
//                         Save Changes
//                     </Button>
//                 </div>
//             </Container>
//         );
//     }
// }

export default withRouter(
    connect(
        state => ({
            save: state.save,
            defaultCountFromRedux: state.defaultCount,
            staff: state.staff,
        }),
        {
            setCountDefault,
            setSaveFalse,
            addStaffMember,
        }
    )(Admin)
);

Admin.propTypes = {
    defaultCountFromRedux: PropTypes.number.isRequired,
    setCountDefault: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired,
};
