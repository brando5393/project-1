

        // Google books API 
var term = "a man in moscow"
        // Google Books URL
var gBooksURL = "https://www.googleapis.com/books/v1/volumes?api_key=AIzaSyC_kBKxX1bOeYZ9z3Itd5x86QwbLL-uS_8&q=" + term 
        // Ajax for Google Books
$.ajax({
    url: gBooksURL,
    method: "GET"
}).then(function(response) {
        //console.log(response);


        // Var for response
  var searchResults = response.items
  console.log(searchResults);


          //for loop for results needs to be updated to limit response to 10 results and then needs to have a clear function as well as links to HTML added (this is not working yet)
  for(var i = 0; i < searchResults; i++) {
    



          //Variables for results
    var title = searchResults.volumeInfo.title;
    console.log(title);
    var author = searchResults.volumeInfo.author;
    console.log(author);
    var date = searchResults.volumeInfo.publishDate;
    console.log(date);
    var descript = searchResults.volumeInfo.discription;
    console.log(descript);
    var image = searchResults.volumeInfo.imageLinks.smallThumbnail
    console.log(image);





    console.log(searchResults.volumeInfo.title);
    console.log(SearchResults.volumeInfo.authors);
    console.log(SearchResults.volumeInfo.publishDate);
    console.log(SearchResults.volumeInfo.description);
    console.log(searchresults.columeInfo.imageLinks.smallThumbnail);







            //Sends results to HTML
    var yourResults = $("<p>").html(
      "Title: " + title + "<br>" +
      "Author: " + author + "<br>" +
      "Description: " + discript + "<br>" 
    )

            //IMG tag for book image
    // $("").html("<img>" + searchResults.volumeinfo.imageLinks.smallThumbnail);

    //$(div name).append()
  };
  


});