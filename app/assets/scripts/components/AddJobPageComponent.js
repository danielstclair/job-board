var React = require('react/dist/react');

var NavComponent = require('./NavigationComponent');
var JobTips = require('./JobTipsComponent');
var JobPost = require('./JobFormComponent');

module.exports = React.createClass({
  render: function(){
    return (
      <section id="add-job-page">
       <NavComponent />
       <JobPost />
       <JobTips />
      </section>
    )
  }
});