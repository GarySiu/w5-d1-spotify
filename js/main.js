$(document).ready(function() {
  // console.log('Hello world!')

  // define variables/HTML elements
  var submitButton = $('#submit-button');
  var searchBox = $('#search-box');
  var typeSelect = $('#type-select');
  var results = $('#results');

getResults = function() {
  event.preventDefault(); // a moment's silence for Gui's dignity

  $.get('https://api.spotify.com/v1/search?q=' + searchBox.val() + '&type=' + typeSelect.val(), function(response) {
    debugger;
  })


  // var result = '<h2>Tada!</h2>'
  // results.append(result);
}

  submitButton.on('click', getResults)

})