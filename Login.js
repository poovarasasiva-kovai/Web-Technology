//"use strict";

var firebaseConfig = {
  apiKey: "AIzaSyAbcg_j3o2IvI2OzVZ0DQMqFf9Fcc454DA",
  authDomain: "firstui5.firebaseapp.com",
  databaseURL: "https://firstui5.firebaseio.com",
  projectId: "firstui5",
  storageBucket: "firstui5.appspot.com",
  messagingSenderId: "611299991957",
  appId: "1:611299991957:web:6b1668bd4470b59333969c",
  measurementId: "G-WGHZES7L1L",
};
firebase.initializeApp(firebaseConfig);

function SignIn() {
  var vRes;
  var suser = document.getElementById("email").value;
  var spassword = document.getElementById("password").value;
  if (suser !== "" && spassword !== "") {
    vRes = firebase
      .auth()
      .signInWithEmailAndPassword(suser, spassword)
      .catch(function (error) {
        alert(error.message);
      });
    setTimeout(function () {
      if (vRes.i !== undefined) {
        var vdispname = suser.replace("@gmail.com", "");
        alert(vdispname);
        sendMail();
      }
    }, 3000);
  }
}
function sendMail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "learningtowards end",
    Password: "learningtowardsend@7",
    To: "poovarasasiva16@gmail.com",
    From: "learningtowardsend@gmail.com",
    Subject: "Test Mail",
    Body: "Content",
  }).then((message) => alert("mail sent successfully"));
}

function SignUp() {
  var vRes;
  var suser = document.getElementById("email").value;
  var spassword = document.getElementById("password").value;
  if (suser !== "" && spassword !== "") {
    vRes = firebase
      .auth()
      .createUserWithEmailAndPassword(suser, spassword)
      .catch(function (error) {
        alert(error.message);
      });

    setTimeout(function () {
      if (vRes.i !== undefined) {
        alert("Success");
      }
    }, 3000);
  } else {
    sap.m.MessageToast.show("Email or Password is Empty");
  }
}
