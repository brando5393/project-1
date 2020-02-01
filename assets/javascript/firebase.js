var config = {
    apiKey: "AIzaSyCtuSfxpVxINhIyPIpuMGAHswNVvPYAgeM",
    apiKey: "AIzaSyD7dRf0QJCxGudbWuvwIcAggJY5kc_SGe4",
    authDomain: "project1-5bfdb.firebaseapp.com",
    databaseURL: "https://project1-5bfdb.firebaseio.com",
    projectId: "project1-5bfdb",
    storageBucket: "project1-5bfdb.appspot.com",
    messagingSenderId: "295028971332",
    appId: "1:295028971332:web:9f200f96f1c9de421f6911"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  
  var database = firebase.database();
  
      
var uerRef = localStorage.getItem("userRef")

if (!userRef) {
    database.ref().push({

        books: [],
    }

    ).then(function(snapshot) {
        console.log(snapshot.key);
        userRef = snapshot.key
        localStorage.setItem("userRef", snapshot.key)

    });
}


database.ref(userRef).on("value", function(snapshot){
    console.log(books);

})
  

//click function for add books
    //get all the info from object
database.ref(userRef + "/books").push("#readList")


database.ref(userRef + "/books").on("child_added")
























