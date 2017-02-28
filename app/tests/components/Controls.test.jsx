const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const Controls = require('Controls');

describe('Controls', () => {
	it('should exists', () => {
		expect(Controls).toExist();
	});

	describe('render', () => {
		it('should render pause when started', () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>)
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Pause)');

			expect ($pauseButton.length).toBe(1);
		});
		it('should render start when paused', () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>)
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Start)');

			expect ($pauseButton.length).toBe(1);
		});
	});

});
