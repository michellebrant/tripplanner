
$(document).ready(function(){

  console.log('application.js on!')
var call = function(){
   $.get('/ajaxcalls').done(function(data, resp){
  for (var key in data) {
    appendAllInfoEvents(data.event.search.events.event)
   }
 })
}
call()

var appendAllInfoEvents = function(events){
  var counter = 0;
  for(var i = 0; i < events.length; i++){
    var event = events[counter]
    console.log(event,'event')
  var $eventDiv = $('<div class="eventDiv">');
  var $eventUl = $('<ul>');
  var split = event.start_time.split(" ")
  var dayShowing = split[0]
  var timeShowing = split[1]
  console.log(dayShowing)
  console.log(timeShowing)

  $('body').append($eventDiv)
  $($eventDiv).append($eventUl)
  // $($eventUl).append('<li>Image: <img src="'+event.image.medium.url+'"></li>')
  $($eventUl).append('<li>Number of Days: '+event.all_day+'</li>')
  $($eventUl).append('<li>City Name: '+event.city_name+'</li>')
  $($eventUl).append('<li>Country: '+event.country_name+'</li>')
  $($eventUl).append('<li>Latitude: '+event.latitude+'</li>')
  $($eventUl).append('<li>Longitude: '+event.longitude+'</li>')
  $($eventUl).append('<li>Postal Code: '+event.postal_code+'</li>')
  $($eventUl).append('<li>State: '+event.region_name+'</li>')
  $($eventUl).append('<li>Title: '+event.title+'</li>')
  $($eventUl).append('<li>Venue: '+event.venue_address+'</li>')
  $($eventUl).append('<li>Venue Link:<a href="'+event.venue_url+'">'+event.venue_name+'</a></li>')
  $($eventUl).append('<li>Day Showing: '+dayShowing+'</li>')
  $($eventUl).append('<li>Time Showing: '+timeShowing+'</li>')
  $($eventUl).append('<li>Description: '+event.description+'</li>')

  counter++
  }


}



})


//   var getData = function(movieTitle){
//     $.ajax({
//       url: "http://www.omdbapi.com/?t=" + movieTitle + "&r=json",
//       dataType: 'json',
//       success: function(data) {
//          console.log(data.Response)
//          console.log(data)
//         if(data.Response === "False"){
//           alert('Please provide an actual movie..... Don\'t try to trick me. :P');

//         } else {handleResponse(data);

//       }

//       }
//   })
//   };

//   var addAJAXFunction = function(){
//    var $searchButton = $('button.u-full-width')


//    $('button.u-full-width').click(function(){
//     var $searchInput = $('input.u-full-width')[0].value
//     var splitInput = $searchInput.split(' ')
//     var joinInput = splitInput.join('+')
//       getData($searchInput)
//    })
//   };
// addAJAXFunction()


//   var counter = 1;
//   var appendMovie = function(name, imagePath, moviePlot){
//       var $colDiv = $('div.four.columns')
//       var $fourColDiv = '<div class="four columns"><h5>'
//     $('div#movies'+rowCounter+'.row').append('<div class="four columns"><h5>')
//     $('h5')[counter].innerText = name;
//     var newImg = '<img src="' + imagePath + '">';
//     // $('div.four.columns')[counter].append(newImg);
//     $('<img />', {
//       src: imagePath,
//       datatool: 'tooltip',
//       title: moviePlot
//     }).appendTo($('div.four.columns')[counter])
//     if(counter>4){
//       rowCounter++;
//       var $movieDiv = $('<div class="row">')
//       var $container = $('.container')
//       $($movieDiv ).attr('id', 'movies'+rowCounter)
//       $($container).append($($movieDiv))

//     }
//     counter++;
//     $('[data-toggle="tooltip"]').tooltip();

//     }


//   var handleResponse = function(data){
//       var moviePlot = data.Plot
//       var movieName = data.Title
//       var movieImg = data.Poster
//       appendMovie(movieName,movieImg, moviePlot)
//       addAttributes(moviePlot)
//   };

//   var addAttributes = function(moviePlot){
//   var kc2Plot = 'Assigned to recover sensitive stolen data, a gruff FBI agent goes undercover as a kindergarten teacher, but the schools liberal, politically correct environment is more than he bargained for.'
//   var $kc2Img = $('img')[0]
//   $($kc2Img).attr({
//     title: moviePlot})
//   }

//   addAttributes()
; // ends doc.ready
