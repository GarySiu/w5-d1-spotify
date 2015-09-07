$(document).ready(function() {
  // console.log('Hello world!')

  // define variables/HTML elements
  var submitButton = $('#submit-button');
  var searchBox = $('#search-box');
  var typeSelect = $('#type-select');
  var results = $('#results');

getResults = function() {
  event.preventDefault(); // a moment's silence for Gui's dignity
  results.empty();
  if(typeSelect.val() === 'default') {
    results.append('<div>Please pick a search type</div>');
    return;
  }

  $.get('https://api.spotify.com/v1/search?q=' + searchBox.val() + '&type=' + typeSelect.val(), function(response) {
      $.each(response[ typeSelect.val() + 's'].items, function(index, item) {
          results.append('<div>' + item.name + '</div>');
      })
  })
}

  submitButton.on('click', getResults);
  typeSelect.on('change', getResults);
  searchBox.on('change', getResults);

})