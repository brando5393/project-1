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

     var infoDiv= $("<div>"); //.attr("style", "visibility:hidden");
     infoDiv.html(bestSellersInfo).attr("id", "showInfo"+ count);
     infoDiv.addClass("infoDiv");
     $("#best-sellers-container").append(infoDiv);
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
   
   
        //  $(".bestSellersImg").on("click", function () {
             
        //     var attrShown=($this).attr("id");

        //     $("#showInfo" + attrShown).css({
        //             visibility: ""
        //          });
        //     $("#showInfo" + attrShown).hide();
        // })
    // // code to hide forms on "finished" button clicks
    //     $("#adding-finished-btn").on("click", function () {
    //     $("#add-entry-form").css({
    //         visibility: "hidden"
    //     });
    //     $("#control-panel-container").show();
    // })

    


}); 



