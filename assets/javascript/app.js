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

    // console.log(response.results.books);//this gives list of all info of bestsellers in an array
    var bestsellers = response.results.books //storing bestsellers in a var

    for(var i=0; i< bestsellers.length; i++) {
        // console.log(bestsellers[i]);

        var title= bestsellers[i].title;
        // console.log(title);
        var author= bestsellers[i].author;
        // console.log(author);
        var bookImg= bestsellers[i].book_image;
        // console.log(bookImg);
        var bookSynp= bestsellers[i].description;
        // console.log(bookSynp);
        var ratings=bestsellers[i].rank;
        // console.log(ratings);

    
        //created Img tag for  bookImg
        var booksImgHolder = $("<img>").attr("src",bookImg).addClass("bestSellersImg")
        console.log(booksImgHolder);

        //all the info to be display 
        var bestSellersInfo= $("<p>").html(
            "Rating : " + ratings  + "<br>" + 
            "Title: " + title + "<br>" + 
            "Author: " + author + "<br>"  +
            "Synopsis: " + bookSynp + "<br>" 
             );

       //testing if it'll show on HTML
    //  $(input name of div here).append(bestSellersInfo, booksImgHolder);
    }

});