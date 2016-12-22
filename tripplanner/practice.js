console.log('yes')
getAllInfoFlights = function() {
    $.ajax({
            url: "http://api.sandbox.amadeus.com//v1.2/flights/low-fare-search?apikey=qzex7QQAbrN1YS9N7nDo2TQDlENnACs8&origin=NYC&destination=BOS&departure_date=2017-01-01&return_date=2017-01-05&adults=2&children=0&nonstop=false&max_price=5000&one-way=false&number_of_results=10",
            method: 'GET'
        })
        .done(function(data) {
          // appendAllInfoFlights(data)


          // console.log(data.results[i].itineraries[0].outbound)

            // outbound[0].flights[0].departs_at)
          // console.log(data.results[i].outbound[0].flights[0].arrives_at)
          // console.log(data.results[i].outbound[0].flights[0].origin.airport)
          // console.log(data.results[i].outbound[0].flights[0].origin.terminal)

        })
}

getAllInfoFlights();
