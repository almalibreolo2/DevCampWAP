var _ = require('lodash');
var $ = require('jquery');

function component () {
    var element = document.createElement('div');
  
    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  $(document).ready(function() {
      $("#btn").click(function() {
          alert('hi');
      });
  });