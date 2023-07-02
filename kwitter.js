function addUser(){
username = document.getElementById("login_input").value;
localStorage.setItem("username", username);

window.location = "kwitter_room.html";
}

//ke the username from the input box, store it in localStorage and then redirect it to kwitter_room.html page.
username = document.getElementById("login_input").value;
localStorage.setItem("username", username);
window.location = "kwitter_room.html";

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      
      window.location = "index.html";
}