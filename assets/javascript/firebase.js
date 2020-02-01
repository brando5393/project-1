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
  
  
  var database = firebase.database();
  
  
  
  // firebase code to store reading lists
  database.ref().on("value", function(snapshot){



  })
      

  //book data obj
  var bookData = {
      image: image,
      title: title,
      author: author
  }
  
  database.ref().set(bookData);





























  

  //   // login js
//   // FirebaseUI config.
//   var uiConfig = {
//     signInFlow: 'popup',
//     signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//       // Leave the lines as is for the providers you want to offer your users.
//       //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       //firebase.auth.GithubAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       //firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//       //firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
//     ],
//     // tosUrl and privacyPolicyUrl accept either url string or a callback
//     // function.
//     // Terms of service url/callback.
//     tosUrl: '<index.html>',
//     // Privacy policy url/callback.
//     privacyPolicyUrl: function() {
//       window.location.assign('index.html');
//     }
//   };

//   // Initialize the FirebaseUI Widget using Firebase.
//   var ui = new firebaseui.auth.AuthUI(firebase.auth());
//   // The start method will wait until the DOM is loaded.
//   ui.start('#firebaseui-auth-container', uiConfig);
  

//   function startAuth(){

//   }

