console.log("script loaded")


$('#yoyo').click(function(event){
console.log('hi')
})


getAllInfoFourSquare = function(data) {
    $.ajax({
            url: "https://api.foursquare.com/v2/venues/explore?client_id=ZNEGNE4KLQ5OW03GEGIIDCS0XCZFCQE01S04NJVAN5R5LPCY&client_secret=CYYND5AXCAJ1SMQDNPZBHODBX1OEX3SQY4RBLPQKDAPXHQGT&near="+ll+"&sortByDistance=1&radius=500&query="+category+"&v=20161124&m=foursquare",
            method: 'GET'
        })
        .done(function(data) {
          console.log(data)
          appendResults(data)

        })
}
$('#ME').click(function(event) {
    event.preventDefault();
    category = $('#category').val()
    category = category.split(' ');
    category = category.join('%20')
    ll = $('#area').val();
    ll = ll.split(' ');
    ll = ll.join("%20")
    getAllInfoFourSquare(category);
})

$('#clear').click(function(event) {
   $('.col-md-6').remove();
})

// $('.dropdown-toggle').dropdown()

$('li').mouseover(function(event){
  $(this).addClass('active')
})

$('li').mouseout(function(event){
  $('li').removeClass('active')
})

appendResults = function(data){
  result = data.response.groups[0]
  for(i=0;i<10;i++){
    resultDiv = $('<div class="col-md-6"></div>')
    results = $('<ul></ul>');
    item = $('<li></li>');
    itemAddress1 = $('<li></li>');
    itemAddress2 = $('<li></li>');
    itemAddress3 = $('<li></li>');
    itemPrice = $('<li></li>');
    itemRating = $('<li></li>');
    itemHours = $('<li></li>');
    name = result.items[i].venue.name;
    namer = JSON.stringify(name)
    namer = namer.split(' ');
    namer = namer.join('%20');
    namer = namer.replace('"', '');
    namer = namer.replace('"', '');
    address1 = data.response.groups[0].items[i].venue.location.formattedAddress[0];
    address2 = data.response.groups[0].items[i].venue.location.formattedAddress[1];
    address3 = data.response.groups[0].items[i].venue.location.formattedAddress[2];
    // src = data.response.groups[0].items[i].venue.categories[0].icon.prefix+ data.response.groups[0].items[i].venue.categories[0].icon.suffix
    // icon = $('<img src='+src+'>')
    // price = data.response.groups[0].items[i].venue.price.message + data.response.groups[0].items[i].venue.price.tier;
    rating = data.response.groups[0].items[i].venue.rating
    ratingColor = data.response.groups[0].items[i].venue.ratingColor;
    // item.text(name);
    itemAddress1.text(address1 + ' ');
    itemAddress2.text(address2 + ' ');
    itemAddress3.text(address3 + ' ');
    // itemPrice.text(price);
    itemRating.text('Rating: '+rating);
    itemRating.css('color', '#'+ratingColor)
    addMeLink = $("<a href=/"+ll+'/'+namer+'>'+name+"</a>");
    results.append(addMeLink);
    results.append(item);
    results.append(itemAddress1);
    results.append(itemAddress2);
    results.append(itemAddress3);
    // results.append(itemPrice);
    results.append(itemRating);
    results.append(itemHours);
    resultDiv.append(results);
    $('body').append(resultDiv);
  }


}

getAllInfoFlights = function(data) {
    $.ajax({
            url: "http://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?origin="+ORIGIN+
            "&destination="+DESTINATION+"&departure_date="+DATE+"&duration="+DURATION+
            "&max_price="+MAXPRICE+"&apikey=qzex7QQAbrN1YS9N7nDo2TQDlENnACs8&one-way="+ONEWAY+"&direct="+DIRECT,
            method: 'GET'
        })
        .done(function(data) {
          console.log(data)
          appendAllInfoFlights(data)

        })
}

appendAllInfoFlights = function(data){

}


$('#submit2').click(function(event) {
    event.preventDefault();
    ORIGIN = $('#origin').val()
    DESTINATION = $('#destination').val()
    DURATION = $('#duration').val()
    DATE = $('#departuredate').val()
    MAXPRICE = $('#maxprice').val()
    ONEWAY = $('#oneway').val()
    DIRECT = $('#direct').val()
    getAllInfoFlights(ORIGIN);
})

getAllInfoHotel = function(data) {
    $.ajax({
            url: "https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=qzex7QQAbrN1YS9N7nDo2TQDlENnACs8&location="
            +HOTELLOCATION+"&check_in="+HOTELCHECKINDATE+"&check_out="+HOTELCHECKOUTDATE+
            "&radius=50&lang=EN&currency=USD&max_rate="+MAXRATE+
            "&number_of_results=10&all_rooms=true&show_sold_out=false",
            method: 'GET'
        })
        .done(function(data) {
          appendAllHotelInfo(data)

          // appendResultsAmadeus(data)

        })
}

$('#submit3').click(function(event) {
    event.preventDefault();
    HOTELLOCATION = $('#location').val()
    HOTELCHECKINDATE = $('#checkin').val()
    HOTELCHECKOUTDATE = $('#checkout').val()
    MAXRATE = $('#maxhotelrate').val()
    getAllInfoHotel(HOTELLOCATION);
})

appendAllHotelInfo = function(data){
  for(i=0;i<10;i++){
    resultDiv = $('<div></div>')
    results = $('<ul></ul>');
    itemName = $('<li></li>');
    itemAddress1 = $('<li></li>');
    itemAddress2 = $('<li></li>');
    itemAddress3 = $('<li></li>');
    itemAddress4 = $('<li></li>');
    itemAddress5 = $('<li></li>');
    itemPrice = $('<li></li>');
    itemContact = $('<li></li>');
    name = data.results[i].property_name
    addressLine1 = data.results[i].address.line1
    addressLine2 = data.results[i].address.city
    addressLine3 = data.results[i].address.region
    addressLine4 = data.results[i].address.postal_code
    addressLine5 = data.results[i].address.country
    itemPricee = data.results[i].min_daily_rate.amount
    itemContactt = data.results[i].contacts[0].detail
    itemName.text(name)
    itemAddress1.text(addressLine1)
    itemAddress2.text(addressLine2)
    itemAddress3.text(addressLine3)
    itemAddress4.text(addressLine4)
    itemAddress5.text(addressLine5)
    itemPrice.text(itemPricee)
    itemContact.text(itemContactt)

    results.append(itemName);
    results.append(itemAddress1);
    results.append(itemAddress2);
    results.append(itemAddress3);
    results.append(itemAddress4);
    results.append(itemAddress5);
    results.append(itemPrice);
    results.append(itemContact);
    resultDiv.append(results);
    $('body').append(resultDiv);
  }


}

// findDuration = function(departure_date, return_date){


// if (departure_date[5]+departure_date[6] === return_date[5]+return_date[6]){
//     depart = parseInt(departure_date[8]+departure_date[9])
//     returns = parseInt(return_date[8]+return_date[9])

//    return duration = returns - depart


// }
// else if (departure_date[5]+departure_date[6] != return_date[5]+return_date[6] && departure_date[5]+departure_date[6]==='01' || departure_date[5]+departure_date[6]==='03' || departure_date[5]+departure_date[6] ==='05' || departure_date[5]+departure_date[6]==='07' || departure_date[5]+departure_date[6]==='08' || departure_date[5]+departure_date[6]==='10' || departure_date[5]+departure_date[6]==='12' ){
//   depart = parseInt(departure_date[8]+departure_date[9])
//   returns = parseInt(return_date[8]+return_date[9])

//   departlength = 31 - depart
//   returnlength = 0 + returns

//   return duration = departlength + returnlength


// }

// else if (departure_date[5]+departure_date[6] != return_date[5]+return_date[6] && departure_date[5]+departure_date[6]==='02' ){
//     depart = parseInt(departure_date[8]+departure_date[9])
//   returns = parseInt(return_date[8]+return_date[9])

//   departlength = 28 - depart
//   returnlength = 0 + returns

//   return duration = departlength + returnlength

// }
// else{
//   depart = parseInt(departure_date[8]+departure_date[9])
//   returns = parseInt(return_date[8]+return_date[9])

//   departlength = 30 - depart
//   returnlength = 0 + returns

//   return duration = departlength + returnlength

// }
// }

// findDuration('2017-04-30', '2017-05-05')
