firebase.auth().onAuthStateChanged(function(user) 
    {
      if (user) 
      {
        // User is signed in.
        var user = firebase.auth().currentUser;

        if(user != null)
        {}
      } 
      else{}
    });

    function login()
    {
      var userEmail = document.getElementById("form-username").value;
      var userPass = document.getElementById("form-password").value;

      firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
        .then( function(user){
        location.href= "home.html";
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
      });
    }
    function logout()
    {
      firebase.auth().signOut();
      location.href = "index.html";
    }