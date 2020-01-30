
$(document).ready(function(){




        // Submit function for search
$("#submit-btn").submit(function() {

     
        // Google books API 
    var searchTerm = $("#titleHelp", "#author-search").val().trim()
        // Google Books URL
    var queryURL = "https://www.googleapis.com/books/v1/volumes?api_key=AIzaSyC_kBKxX1bOeYZ9z3Itd5x86QwbLL-uS_8&q=" + searchTerm 
        

        // Ajax for Google Books
   $.ajax({
        url: queryURL,
        method: "GET"
   }).then(function(response) {
        console.log(response);


          //for loop for results needs to be updated to limit response to 10 results and then needs to have a clear function as well as links to HTML added (this is not working yet)
for(var i = 0; i < response.items.length; i++) {
    



          //Variables for results
        var title = response.items[i].volumeInfo.title;
        //console.log(title);
        var author = response.items[i].volumeInfo.authors;
        //console.log(author);
        var date = response.items[i].volumeInfo.publishedDate;
        //console.log(date);
        var descript = response.items[i].volumeInfo.description;
        //console.log(descript);
        var image = response.items[i].volumeInfo.imageLinks.smallThumbnail
        //console.log(image);

            //variable for book IMG
        var BookImg = $("<img>").attr("src", image).addClass("SearchImage")
        //console.log(searchResults.volumeInfo.title);
        //console.log(SearchResults.volumeInfo.authors);
        //console.log(SearchResults.volumeInfo.publishDate);
        //console.log(SearchResults.volumeInfo.description);
        //console.log(searchresults.columeInfo.imageLinks.smallThumbnail);




            //variable for results to HTML
        var yourResults = $("<p>").html(
        "Title: " + title + "<br>" +
        "Author: " + author + "<br>" +
        "Date: " + date + "<br>" +
        "Description: " + descript + "<br>" 
        );
            //sends results to results div
    $("#results-container").append(yourResults, BookImg);
                
};
  



});
});
});