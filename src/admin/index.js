import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { setCountDefault, setSaveFalse } from '../actions';

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const DefaultCountInput = styled.input`
    margin-left: 10px;
`;

// https://reactjs.org/docs/hooks-intro.html
const Admin = ({ history, setCountDefault, defaultCountFromRedux }) => {
    const [defaultCount, setDefaultCount] = useState(defaultCountFromRedux);

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
        }),
        { setCountDefault, setSaveFalse }
    )(Admin)
);

Admin.propTypes = {
    defaultCountFromRedux: PropTypes.number.isRequired,
    setCountDefault: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired,
};
