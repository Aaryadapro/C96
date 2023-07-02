const firebaseConfig = {
    apiKey: "AIzaSyDpnd8f178Jt3q_N3hJ9r7R_25wDTiOicg",
    authDomain: "letschat-ce688.firebaseapp.com",
    projectId: "letschat-ce688",
    storageBucket: "letschat-ce688.appspot.com",
    messagingSenderId: "660894874853",
    appId: "1:660894874853:web:ee49b1fecaa96cef52e80c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  username = localStorage.getItem("login_input");
  document.getElementById("username").innerHTML = "Welcome"+ username +"!";
  
  //Write code for the addRoom() function in kwitter_room.js such that it:
// Gets the room name from the input field
// Adds the room name to localStorage and firebase database
// Redirects to kwitter_page.html

function addRoom(){
  document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData(){

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
 row = "<div class='room_name' id="+room_names+" onclick='rediectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
//End code
});});}
getData();
}

//Create a rediectToRoomName() function such that it:
//Stores the room name in localStorage.
//Redirects to a particular room’s message page, that is kwitter_page.html.

function rediectToRoomName(){
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}