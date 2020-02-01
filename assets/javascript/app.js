
$(document).ready(function(){

        // Submit function for search
$("#submit-btn").click(function(event) {
    event.preventDefault();

        // Variables for Search
    var searchBook = $("#title-search").val().trim();
    var searchAuth = $("#author-search").val().trim();

        // Google Books URL
    var queryURL = "https://www.googleapis.com/books/v1/volumes?api_key=AIzaSyC_kBKxX1bOeYZ9z3Itd5x86QwbLL-uS_8&q=" + searchBook + searchAuth
     
    //console.log(queryURL)
        // Ajax for Google Books
   $.ajax({
        url: queryURL,
        method: "GET"
   }).then(function(response) {

    $("#results-container").empty();
          //for loop for results needs to be updated to limit response to 10 results and then needs to have a clear function as well as links to HTML added (this is not working yet)
for(var i = 0; i < response.items.length; i++) {
    
          //Variables for results
        var title = response.items[i].volumeInfo.title;
        var author = response.items[i].volumeInfo.authors;
        var date = response.items[i].volumeInfo.publishedDate;
        //var descript = response.items[i].volumeInfo.description;
        //console.log(descript);
        var image = response.items[i].volumeInfo.imageLinks.smallThumbnail

            //variable for book IMG
        var bookImg = $("<img>").attr("src", image).addClass("SearchImage")

            //variable for results to HTML
        var yourResults = $("<h6>").html(
        "Title: " + title + "<br>" +
        "Author: " + author + "<br>" +
        "Date: " + date + "<br>" //+
        //Description: " + descript + "<br>" 
        );
        console.log(yourResults);
        //console.log(BookImg)
        
            //sends results to results div       
    $("#results-container").append(bookImg, yourResults);
    
            //this is needed or error appears thank you google :)
    document.cookie = 'cross-site-cookie=bar; SameSite=Lax';
    
};
});
});

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
    var count=0;

    // need to create a for loop that will only pull 5 random books  out of all these to show 
    for(var j=0; j<5; j++) {

        var bookTitle= bestsellers[j].title;
        // console.log(bookTitle);
        var bookAuth=bestsellers[j].author;
        var bookImg=bestsellers[j].book_image;
        var bookSynp= bestsellers[j].description;
        var bookRating= bestsellers[j].rank;

        
        count++;
        //created Img tag for  bookImg
        var booksImgHolder = $("<img>").attr("src",bookImg).attr("id", count).addClass("bestSellersImg").css({"width" : "100px"});

        //all the info to be display 
        var bestSellersInfo= $("<p>").html(
            "Rank " + bookRating  + "<br>" + 
            "Title: " + bookTitle + "<br>" + 
            "Author: " + bookAuth + "<br>"  +
            "Synopsis: " + bookSynp + "<br>" 
             )
           
         

       //displaying on html
       $("#best-sellers-container").append(booksImgHolder);

       var infoDiv= $("<div>");
    infoDiv.html(bestSellersInfo).attr("id", "showInfo"+ count);
    $("#best-sellers-container").append(infoDiv);
    $(infoDiv).addClass("infoDiv");
   $("#showInfo" + count).hide();
    };//for loop close 

    


//creating on click for each book img to show info about book 
    $(".bestSellersImg").on("click", function() {

        $(".infoDiv").hide()
        var attrShown= $(this).attr("id");
        console.log(attrShown);
    
        //  if(attrShown === "imgNum" + count) {
        //     console.log("true");
        $("#showInfo"+ attrShown).show()
        // $(".bookInfo").attr("style", "visibility:").attr("id")
         
       
    });
   
   
    


}); 






});