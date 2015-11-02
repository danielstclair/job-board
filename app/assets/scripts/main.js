	function consoleIt (){	
    console.log('oh shit, that\'s nice') }
    // module.exports = consoleIt;
consoleIt();

var NavComponent = require('./components/NavigationComponent.js');

var AppComponent = React.createClass({
  render: function(){
    return (
      <div>
       <NavComponent />
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(AppComponent), 
  document.getElementById('app')
);