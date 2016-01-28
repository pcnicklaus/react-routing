// anything you want to show up on every page
// this.props.children allows access the children of the components - insert the children - the routes!!! all is done behind the scenes...
var React = require('react');

var Base = React.createClass({

   render: function () {
      return (
         <div>
            <h1>Header</h1>
               {this.props.children}
            <h1>Footer</h1>
         </div>
      )
   }
});

module.exports = Base;
