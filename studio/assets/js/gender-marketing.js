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
          // Get the response and format it to JSON
          return response.json();
      })
      .then(function(jsonData) {
          // log the data
          printStuff(jsonData);

          console.log(jsonData)

      });

var some_articles = [];
var articles_div = document.getElementById('articles');
var articles_image = document.getElementById('articles_image');
var articles_description = document.getElementById('articles_description');

function printStuff(data) {

  for (var i = 0; i < 10; i++) {
    var article = {};
    article.title = data.articles[i].title;
    article.image = data.articles[i].urlToImage;
    some_articles.push(article);
  }

  articles_title.innerHTML = some_articles[0].title;
  articles_image.src = some_articles[0].image;

  return some_articles;

}

document.body.addEventListener('click', cycleArticles);

var click_count = 0;

function cycleArticles() {
  click_count++;

  if (click_count > some_articles.length - 1) {
    click_count = 0;
  }

  articles_title.innerHTML = some_articles[click_count].title;
  articles_image.src = some_articles[click_count].image;

}


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
