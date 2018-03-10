import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('should render DashboardPage correctly', () => {
	const wrapper = shallow(<DashboardPage />);
	// expect(wrapper.find('h1').text()).toBe('Expensify');
	expect(wrapper).toMatchSnapshot();
});