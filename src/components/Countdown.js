import React from 'react';
import PropTypes from 'prop-types';

const Countdown = props => {
    const { start, end } = props;
    return (
        <div>
            {start}
            {end}
        </div>
    );
};

Countdown.propTypes = {
    start: PropTypes.number,
    end: PropTypes.number,
};

Countdown.defaultProps = {
    start: 10,
    end: 9,
};
export default Countdown;
