// fetch('http://api.openweathermap.org/data/2.5/weather?zip=11206&APPID=ab81c5023ce1c29054b45788e4532bae&units=imperial')
//     .then(function(response) {
//         // Get the response and format it to JSON
//         return response.json();
//     })
//     .then(function(jsonData) {
//         // log the data
//         render(jsonData);
//     });

    var url = 'https://newsapi.org/v2/everything?' +
          'q=Gender AND Stereotypes AND Ads OR Marketing&' +
          'from=2012-01-18&to=2018-04-18' +
          'sortBy=relevancy&' +
          'pageSize=100&' +
          'domains=wsj.com,nytimes.com,abcnews.com,huffingtonpost.com,theguardian.com,cbs.com,bbc.com,times.com,cbc.com,cnn.com,channelnewsasia.com,bostonherald.com,adweek.com,nypost.com,washingtonpost.com,itsnicethat.com&' +
          // sources=abc-news&bbc-news&cnn&bloomberg&cbc-news%cbs-news&mirror&time&the-new-york-times&wired-de&' +
          'apiKey=24637ba5c5764480a35c1af41ef9c482';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
      });

      // .then(function(jsonData) {
      //       // log the data
      //       console.log(jsonData);
      //   });

//
// function render(promiseValue) {
//   var data = promiseValue.articles
//   console.log(articles);
// }

// var pict = document.querySelector('.pict')
//
//     function render(request) {
//       // var data = promiseValue.articles
// console.log('render');
//       //log the data in its entirety
//       console.log(request);
//
//       //log the current temperature
//       console.log(data.articles);
//
//   //insert the temperature
//   pict.innerHTML = data.articles
// }
