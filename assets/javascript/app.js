<<<<<<< HEAD


        // Google books API 
var term = "a man in moscow"
        // Google Books URL
var queryURL = "https://www.googleapis.com/books/v1/volumes?api_key=AIzaSyC_kBKxX1bOeYZ9z3Itd5x86QwbLL-uS_8&q=" + term 
        // Ajax for Google Books
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
        console.log(response);


        // Var for response
  //var searchResults = response.items
  //console.log(searchResults);


          //for loop for results needs to be updated to limit response to 10 results and then needs to have a clear function as well as links to HTML added (this is not working yet)
  for(var i = 0; i < response.items.length; i++) {
    



          //Variables for results
    var title = response.items[i].volumeInfo.title;
    console.log(title);
    var author = response.items[i].volumeInfo.authors;
     console.log(author);
//     var date = searchResults.volumeInfo.publishDate;
//     console.log(date);
//     var descript = searchResults.volumeInfo.discription;
//     console.log(descript);
//     var image = searchResults.volumeInfo.imageLinks.smallThumbnail
//     console.log(image);


//         var BookImg = $("<img>")("src", image).addClass("SearchImage")


// //     console.log(searchResults.volumeInfo.title);
// //     console.log(SearchResults.volumeInfo.authors);
// //     console.log(SearchResults.volumeInfo.publishDate);
// //     console.log(SearchResults.volumeInfo.description);
// //     console.log(searchresults.columeInfo.imageLinks.smallThumbnail);







//             //Sends results to HTML
//     var yourResults = $("<p>").html(
//       "Title: " + title + "<br>" +
//       "Author: " + author + "<br>" +
//       "Description: " + discript + "<br>" 
//     );

    //$(" DIV NAME HERE").append(yourResults, BookImg);

 };
  


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

  
  
>>>>>>> 477e518dc13ea0afb7f34bc31b8ff14b5c564ecf
