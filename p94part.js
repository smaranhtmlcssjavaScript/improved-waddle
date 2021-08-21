var firebaseConfig = {
    apiKey: "AIzaSyAfwLZDynhYFeryAxU_k29UUWccS2SM2Js",
    authDomain: "kwitter-a5ec3.firebaseapp.com",
    databaseURL: "https://kwitter-a5ec3-default-rtdb.firebaseio.com",
    projectId: "kwitter-a5ec3",
    storageBucket: "kwitter-a5ec3.appspot.com",
    messagingSenderId: "365257154806",
    appId: "1:365257154806:web:54331ba439d265c96a8cd7"
  };

  firebase.initializeApp(firebaseConfig);

  function adduser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      });
  }