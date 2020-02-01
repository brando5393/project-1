
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

