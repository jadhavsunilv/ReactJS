import React from 'react';
import { shallow } from 'enzyme';
//import { findByTestAtrr, checkProps } from './../../../Utils';
import { findByTestAtrr,checkProps } from '../../Utils/index';
import SharedButton from './index';

describe('SharedButton Component', () => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            };
            wrapper = shallow(<SharedButton {...props} />);
        });

        fit('Should Render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            console.log("button=>"+button.length);
            expect(button.length).toBe(1);
        });

        fit('Should emit callback on click event', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });


    });

});
