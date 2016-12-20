function callEventful(searchValue){
    $.ajax({
      url: 'http://api.eventful.com/rest/events/search?...&keywords=books&location=San+Diego&date=Future&app_key=bBnC2nhp4zqNBB4w'

    }).success(function(data) {
        console.log(data,'data-in')
      displayStatusOut(data.ticker)
    })
  }

