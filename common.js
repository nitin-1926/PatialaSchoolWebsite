var input;
var database;
function refresh()
{
  window.location.reload();
}
  database = firebase.database();
  var ref = database.ref('news');
  
  ref.on("child_added",function(data,previosChildKey)
  {
    var fetched_array = data.val();
  
    var k = fetched_array;

    var title = k.title;

    var table = document.getElementById("table");
    var row = document.createElement("tr");

    var news_title = document.createElement("td");
    news_title.innerHTML = title;
    
    var date = document.createElement("td");
    date.innerHTML = k.date;

    var status = document.createElement("td");
    status.innerHTML = "Published";

    row.appendChild(news_title);
    row.appendChild(date);
    row.appendChild(status);

    table.appendChild(row);
    });

function newspublish()
{
  input = document.getElementById("input");

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth()+1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  var data = {
    title: input.value,
    date:  today
  }
  ref.push(data);
}

function errData(error)
{
  alert("Error Recieved");
  console.log(error);
}

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