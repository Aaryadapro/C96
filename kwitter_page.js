//YOUR FIREBASE LINKS
var firebaseConfig = { 
    apiKey: "AIzaSyDKgf5VNRvi3LoEMIuatAFzSwUJT9t7Jhc",
     authDomain: "kwitter-aarya.firebaseapp.com",
      databaseURL: "https://kwitter-aarya-default-rtdb.firebaseio.com",
       projectId: "kwitter-aarya",
        storageBucket: "kwitter-aarya.appspot.com",
         messagingSenderId: "500086453067",
          appId: "1:500086453067:web:80beff9d869d6f0e632ece"
};
            // Initialize Firebase 
          firebase.initializeApp(firebaseConfig);

          user_name = localStorage.getItem("user_name");
          room_name = localStorage.getItem("room_name");

          function send(){
          msg = document.getElementById("msg").value;
          

          firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like:0
      });
    }

      document.getElementById("msg").value = "";
      
      

