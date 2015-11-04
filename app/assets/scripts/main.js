var React = require('react/dist/react');
var ReactDOM = require('react-dom/dist/react-dom');
var Backbone = require('backbone');

var AddJobPage = require('./components/AddJobPageComponent');

var AppComponent = React.createClass({
  render: function(){
    return (
      <section id="app-component">
        <AddJobPage />
      </section>
    )
  }
});

ReactDOM.render(
  React.createElement(AppComponent), 
  document.getElementById('app')
);