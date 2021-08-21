var firebaseConfig = {
      apiKey: "AIzaSyBXY9yrxTr7G28fucBAr9udmmahsEzoguU",
      authDomain: "letschatapp-90777.firebaseapp.com",
      databaseURL: "https://letschatapp-90777-default-rtdb.firebaseio.com",
      projectId: "letschatapp-90777",
      storageBucket: "letschatapp-90777.appspot.com",
      messagingSenderId: "825790578419",
      appId: "1:825790578419:web:28e768868c137d964a8186"
    };

    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

    function addroom() {
          roomname = document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomname).update({
                purpose: "adding room name"
          });
          localStorage.setItem("roomname", roomname);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + " </div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}
