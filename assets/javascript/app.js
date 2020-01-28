//main JS file


//NYT API
var mvAPI = "XrPZZH0SkeXWEk4ExM3vIM4gh2neOKwv";
// // NYT testing API Key. the use of  "current" which means getting the latest list 
    var queryURL="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" + mvAPI;
    console.log(queryURL);


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);

    // console.log(response.results.books);//this gives list of all info of bestsellers in an array
    var bestsellers = response.results.books //storing bestsellers in a var


    // need to create a for loop that will only pull 5 random books  out of all these to show 
    for(var i=0; i<5; i++) {
    // for(var i=0; i< bestsellers.length; i++) { //this will pull up ALL the listings of books which is 15
    //     // console.log(bestsellers[i]);


        var randomBook = bestsellers[Math.floor(Math.random() * bestsellers.length)];
        // console.log(randomBook.title);

        var ranBookTitle= randomBook.title;
        console.log(ranBookTitle);
        var ranBookAuth=randomBook.author;
        var ranBookImg=randomBook.book_image;
        var ranBookSynp= randomBook.description;
        var ranBookRating= randomBook.rank;
             
        
        //created Img tag for  bookImg
        var booksImgHolder = $("<img>").attr("src",ranBookImg).addClass("bestSellersImg")
        // console.log(booksImgHolder);

        //all the info to be display 
        var bestSellersInfo= $("<p>").html(
            "Rank " + ranBookRating  + " out of 15" + "<br>" + //have explain NYT have 15 total somewhere
            "Title: " + ranBookTitle + "<br>" + 
            "Author: " + ranBookAuth + "<br>"  +
            "Synopsis: " + ranBookSynp + "<br>" 
             );

       //testing if it'll show on HTML ...added test-div in html to test this out for now
     $(".test-div").append(booksImgHolder, bestSellersInfo);
    };

});