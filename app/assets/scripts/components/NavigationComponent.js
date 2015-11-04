var React = require('react/dist/react');

module.exports = React.createClass({
  render: function(){
    return (
      <header className="nav">
        <img id="logo" src="assets/images/logo.png"/>
        <h1>Fresh Jobs</h1>
        <nav>
          <ul>
            <li><a href="#">JOBS</a></li>
            <li><a href="#">COMPANIES</a></li>
            <li><a href="#">CITIES</a></li>
            <li><a href="#">WHY FRESH?</a></li>
            <li><a href="#">FOR EMPLOYERS</a></li>
          </ul>
        </nav>
      </header>
    )
  }
});