//main JS file


//NYT API
var mvAPI = "XrPZZH0SkeXWEk4ExM3vIM4gh2neOKwv";
// // NYT testing API Key. the use of  "current" which means getting the latest list 
    var queryURL="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" + mvAPI;
    console.log(queryURL);

 //testing looking up a Title (with title stored in a var)
// var bookTitle= "Mostly Dead Things"
// var queryURL="https://api.nytimes.com/svc/books/v3/reviews.json?title=" + bookTitle + "&api-key=" + mvAPI;
// console.log(queryURL);

//testing looking up a Author (with author stored in a var)
//  var author= "Stephen King"
//var queryURL="https://api.nytimes.com/svc/books/v3/reviews.json?author="+author+"&api-key="+mvAPI;
// console.log(queryURL);


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);

    // console.log(response.results.books);//this gives list of bestsellers in an array
    var bestsellers = response.results.books //storing bestsellers in a var
    
    console.log(bestsellers);
    //to get just the title: console.log(bestsellers[0].title);
    
    //to get just the book image: 
    console.log(bestsellers[0].book_image)

    //to get the syopsis/description
    console.log(bestsellers[0].description)

});