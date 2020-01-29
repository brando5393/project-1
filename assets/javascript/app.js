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
 

