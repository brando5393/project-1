


var term = "harry potter"

var gBooksURL = "https://www.googleapis.com/books/v1/volumes?api_key=AIzaSyC_kBKxX1bOeYZ9z3Itd5x86QwbLL-uS_8&q=" + term 

$.ajax({
    url: gBooksURL,
    method: "GET"
}).then(function(response) {
    console.log(gBooksURL);
    console.log(response);

    $("").html("<h3>" + response.volumeInfo.title)
    $("").html("<p>" + response.volumeInfo.authors)
    $("").html("<p>" + response.volumeInfo.publishDate)
    $("").html("<p>" + response.volumeInfo.description)
});