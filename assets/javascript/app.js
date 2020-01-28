

// Google books API 
var term = "a man in moscow"

var gBooksURL = "https://www.googleapis.com/books/v1/volumes?api_key=AIzaSyC_kBKxX1bOeYZ9z3Itd5x86QwbLL-uS_8&q=" + term 
// Ajax for Google Books
$.ajax({
    url: gBooksURL,
    method: "GET"
}).then(function(response) {
    //console.log(response);


 
var searchResults = response.items
console.log(searchResults);



  for(var i = 0; i < searchResults; i++) {
    //console.log(searchResults[i]);
   







    // console.log(searchResults.volumeInfo.title);
    // console.log(SearchResults.volumeInfo.authors);
    // console.log(SearchResults.volumeInfo.publishDate);
    // console.log(SearchResults.volumeInfo.description);









    // $("").html("<p>" + searchResults.title);
    // $("").html("<p>" + searchResults.volumeInfo.authors);
    // $("").html("<p>" + searchResults.volumeInfo.publishDate);
    // $("").html("<p>" + searchResults.volumeInfo.description);




  }; 


});