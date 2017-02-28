var React = require('react');
var Controls = require('Controls');

var Clock = React.createClass({
	render: function () {
		return (
			<div>
				<div>this is the Clock component</div>
				<Controls />
			</div>
		)
	}
})

module.exports = Clock
