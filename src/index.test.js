import React from 'react';
import { shallow} from 'enzyme';
import App from './index';
import Forms from './components/Form';


describe('arrayContaining', () => {
    const expected = [{ id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }];
    it('matches to one of the elements', () => {
        expected(['todo-0']).toEqual(expect.arrayContaining(expected));
    })
    it('renders without crashing', () => {
        shallow(<App />);
    });
    
})

describe('Test Button component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
  
      const button = shallow((<Forms onClick={mockCallBack}>Ok!</Forms>));
      button.find('button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });