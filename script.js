$(document).ready(function() {//so page is loaded fully and safe for us to manipulate

   $("#search").on("submit", function(e) {
       e.preventDefault();

      
      var dataIN = {t: $('input[name=t]').val()};
       $.ajax({
        type: "GET",
        url: 'http://www.omdbapi.com/?',
        data: dataIN,
        success: function(response) {

              $("#poster").attr("src", response.Poster);
              $("#movie-title").html(response.Title);
              $("#movie-year").html(response.Year);
              $("#movie-country").html(response.Country);
              $("#movie-released").html(response.Released);
              $("#actors").html("Actors: " + response.Actors);
              $("#directors").html("Directors: " + response.Director);
              console.log(response);
        }
       })
   })
});


function onKeyUp() {

  
     $.getJSON("http://www.omdbapi.com/?", {
               t: $('input[name=t]').val(),
           },
          function(response) {
               $("#movie-title").html(response.Title);
               $("#poster").attr("src", response.Poster);
             
               console.log(response);
               console.log(response.Actors)
           });;
}