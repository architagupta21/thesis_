import React from 'react';
import {
    shallow,
    // mount,
    // render
} from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'jest-styled-components';
import App from '../../components/App';

it('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toEqual(3);
});

it('renders successfully', () => {
    const wrapper = shallow(<App.WrappedComponent />);

    expect(wrapper).toMatchSnapshot();
});
it('has title', () => {
    const wrapper = shallow(<App.WrappedComponent />);

    expect(wrapper.find('AppTitle')).toHaveLength(1);
});

describe('App Component Title', () => {
    const wrapper = shallow(<App.WrappedComponent />);
    const title = wrapper.find('AppTitle');

    it('title has 2 icons', () => {
        expect(title.find(FontAwesomeIcon)).toHaveLength(2);
    });

    it('has correct text', () => {
        expect(title.childAt(0).text()).toBe('Hello LTI ');
        expect(title.childAt(2).text()).toBe('React App!');
    });

    it('has correct icons', () => {
        const icons = title.findWhere(n => n.type() === FontAwesomeIcon);
        expect(icons.at(0).props().icon[1]).toEqual('react');
        expect(icons.at(1).props().icon[1]).toEqual('cog');
    });
});

describe('Test Api Button', () => {
    const wrapper = shallow(<App.WrappedComponent />);
    const component = wrapper.find('TestAPIButton');

    it('Has correct styling', () => {
        expect(component).toHaveStyleRule('color', 'white');
        expect(component).toHaveStyleRule('background-color', '#4caf50');
        expect(component).toHaveStyleRule('border', 'none');
        expect(component).toHaveStyleRule('padding', '15px 32px');
        expect(component).toHaveStyleRule('text-align', 'center');
        expect(component).toHaveStyleRule('text-decoration', 'none');
        expect(component).toHaveStyleRule('display', 'inline-block');
        expect(component).toHaveStyleRule('font-size', '16px');
    });

    it('Has Correct Label', () => {
        expect(component.children().text()).toEqual('Test API');
    });
});
