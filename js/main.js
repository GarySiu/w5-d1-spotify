$(document).ready(function() {
  // console.log('Hello world!')

  // define variables/HTML elements
  var submitButton = $('#submit-button');
  var searchBox = $('#search-box');
  var typeSelect = $('#type-select');
  var results = $('#results');
  var tempSearch = searchBox.val();

  getResults = function() {
    event.preventDefault(); // a moment's silence for Gui's dignity
    results.empty();
    if(typeSelect.val() === 'default') {
      results.append('<div>Please pick a search type</div>');
      return;
    }

    $.get('https://api.spotify.com/v1/search?q=' + searchBox.val() + '&type=' + typeSelect.val(), function(response) {
      $.each(response[ typeSelect.val() + 's'].items, function(index, item) {
          results.append('<div class="search-results">' + item.name + '</div>');
          if(typeSelect.val() === 'track') {
            // debugger;
            results.append('<img src="' + item.album.images[1].url + '">');
            results.append('<div><audio src="' + item.preview_url + '" controls></audio></div>');
          }
      })
    })
  }

  cautiousGetResults = function() {
    if(searchBox.val() !== tempSearch) { getResults() }
  }

  submitButton.on('click', getResults);
  typeSelect.on('change', getResults);
  searchBox.on('keydown', function() { tempSearch = searchBox.val() }); // Let's make sure something is actually typed before spamming AJAX calls.
  searchBox.on('keyup', cautiousGetResults); // possibly a terrible idea because there will be a LOT of API calls but looks like Google Instant now!

})