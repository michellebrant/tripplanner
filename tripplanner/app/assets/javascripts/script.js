
$(document).ready(function(){

  console.log('application.js on!')





var sendData = function(data){
   $.post('/ajaxcalls').done(function(data, resp){
  for (var key in data) {
    appendAllInfoEvents(data.event.search.events.event)
   }
 })
}

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



var call = function(){
   $.get('/ajaxcalls').done(function(data, resp){
  for (var key in data) {
    appendAllInfoEvents(data.event.search.events.event)
   }
 })
}
call()



});

