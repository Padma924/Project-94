var firebaseConfig = {
      apiKey: "AIzaSyDF_4c4-1nLAXqaqrc6IJOmWXIzPxjTlQQ",
      authDomain: "project-94-30140.firebaseapp.com",
      projectId: "project-94-30140",
      storageBucket: "project-94-30140.appspot.com",
      messagingSenderId: "871421491432",
      appId: "1:871421491432:web:d52b5adccf3f104de2315d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      

      //End code
      });});}
getData();
