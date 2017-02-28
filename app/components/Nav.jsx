var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="dropdown menu" data-dropdown-menu>
					<li className="menu-text">React Timer App</li>
					<li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
					<li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
				</ul>
			</div>
			<div className="top-bar-right ">
				<p>Created by <a href="http://github.com/tiagowhite" target="_blank">Tiago Fernandes</a></p>
			</div>
		</div>
	);

}

module.exports = Nav
