function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "4SwkCevdiemshCksVbrE0Oi0GIlsp1p4lTRjsnxipKxfnqV7UW",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var r = JSON.parse(response);

      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(r.quote);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(r.author);
        });
    }
  });
}
$(document).ready(function() {
  getQuote();
  $('#quote-button').on('click', getQuote);
});
