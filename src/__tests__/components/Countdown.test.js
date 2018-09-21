import React from 'react';
import { shallow } from 'enzyme';
import Countdown from '../../components/Countdown';

it('Renders Correctly', () => {
    const wrapper = shallow(<Countdown />);

    expect(wrapper).toMatchSnapshot();
});
