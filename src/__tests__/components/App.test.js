import React from 'react';
import { shallow, mount } from 'enzyme';
import App, { APIButtonComponent } from '../../components/App';

describe('App Component', () => {
    const wrapper = shallow(<App.WrappedComponent />);

    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('Title', () => {
        const title = wrapper.find('AppTitle');

        it('Has correct text', () => {
            expect(title.childAt(0).text()).toBe('Hello LTI');
            expect(title.childAt(2).text()).toBe('React App!');
        });

        it('has correct icon', () => {
            const titleIcon = title.find('FontAwesomeIcon');

            expect(titleIcon.props().icon[0]).toBe('fab');
            expect(titleIcon.props().icon[1]).toBe('react');
        });
    });

    describe('API Button Message', () => {
        const APIButtonMessage = wrapper.find('APIButtonMessage');

        it('has correct message', () => {
            expect(APIButtonMessage.childAt(0).text()).toBe(
                'Ensure that you have created the sample database and tables to test the API button below, Use developer tools to see output.'
            );
        });
    });

    describe('API Test Button', () => {
        const APIButtonComponen = shallow(
            <APIButtonComponent onClick={() => {}} />
        );
        const APIButton = APIButtonComponen.find('APIButton');

        const spy = sinon.spy();

        it('has correct label', () => {
            expect(APIButton.childAt(0).text()).toBe('Test API');
        });

        it('calls test functions on click', () => {
            const mountedButton = mount(<APIButtonComponent onClick={spy} />);

            mountedButton.find('APIButton').prop('onClick')();

            expect(spy.calledOnce).toBe(true);
        });
    });
});
