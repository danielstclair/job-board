var React = require('react/dist/react');
var ReactDOM = require('react-dom/dist/react-dom');
var Backbone = require('backbone');

var NavComponent = require('./components/NavigationComponent.js');
var JobTips = require('./components/JobTipsComponent.js');
var JobPost = require('./components/JobFormComponent');

var AppComponent = React.createClass({
  render: function(){
    return (
      <div>
       <NavComponent />
       <JobPost />
       <JobTips />
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(AppComponent), 
  document.getElementById('app')
);