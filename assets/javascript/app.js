<<<<<<< HEAD
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

    var invervalid;

    var usedNum= {};

    function ranBookTime () {
        setTimeout (startRandom, 3000);
    };
    ranBookTime();
    
    function nextBooks () {
        setInterval (startRandom, 3000);
        reset();
    
    };
    
    function reset () {
        $(".test-div").empty();
        
    }

    
    function startRandom () {
        nextBooks();
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

            

        //need to figure out to delete duplicates for random 
        var randomNum=Math.floor(Math.random() * bestsellers.length);
        var exit=false;
        
    
        //this makes sure the random number always random (trying to elimiate duplicates) //code from a developer friend
        while (exit==false) {
            randomNum=Math.floor(Math.random() * bestsellers.length);
            if (usedNum[randomNum] == undefined) {
                usedNum[randomNum] = true;
                exit = true;
            }
        };
        console.log(usedNum);
        
      
        //created Img tag for  bookImg
        var booksImgHolder = $("<img>").attr("src",ranBookImg).addClass("bestSellersImg").css({"width" : "100px"});

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

}; //closure for function start 


});
=======
// firebase connect code
$(document).ready(function(){
  $('.collapsible').collapsible();
});
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCtuSfxpVxINhIyPIpuMGAHswNVvPYAgeM",
    authDomain: "coding-bootcamp-project-986ec.firebaseapp.com",
    databaseURL: "https://coding-bootcamp-project-986ec.firebaseio.com",
    projectId: "coding-bootcamp-project-986ec",
    storageBucket: "coding-bootcamp-project-986ec.appspot.com",
    messagingSenderId: "25197836680",
    appId: "1:25197836680:web:08de31c393589bc2cfe23d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // "I was thinking that this will be data that will go into rows inside the Your Results container?"
  
  var createRow = function(data) {
    // Create a new table row element
    var tRow = $("<tr>");

  //   // Methods run on jQuery selectors return the selector they we run on
  // //   // This is why we can create and save a reference to a td in the same statement we update its text
  //   var titleTd = $("<td>").text(data.Title);
  //   var yearTd = $("<td>").text(data.Year);
  //   var authorTd = $("<td>").text(data.Author);
  //   // Append the newly created table data to the table row
  //   tRow.append(titleTd, yearTd, authorTd);
  //   // Append the table row to the table body
  //   $("tbody").append(tRow);
  // };

  // // , searche the ? api for books, and then pass the data to createRow
  // var searchBooks= function(books) {
  //   var queryURL = "https://www.omdbapi.com/?t=" + books + "&apikey=trilogy";
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function(response) {
  //     createRow(response);
  //   });
  // };

  // // Search the API for the following book, and append table rows for each
  // searchBooks("");
 
>>>>>>> 2680e1e0cc6f123355e04b104dbe0ef1bca0f7e3

