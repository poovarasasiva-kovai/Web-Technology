"use strict";

var firebaseConfig = {
    apiKey: "AIzaSyAbcg_j3o2IvI2OzVZ0DQMqFf9Fcc454DA",
    authDomain: "firstui5.firebaseapp.com",
    databaseURL: "https://firstui5.firebaseio.com",
    projectId: "firstui5",
    storageBucket: "firstui5.appspot.com",
    messagingSenderId: "611299991957",
    appId: "1:611299991957:web:6b1668bd4470b59333969c",
    measurementId: "G-WGHZES7L1L"
};
firebase.initializeApp(firebaseConfig);

function Login()
{
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        alert(result.user.displayName);
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message);
        var email = error.email;
        var credential = error.credential;
    });
}


// //signup
// vRes = firebase.auth().createUserWithEmailAndPassword(suser, spassword).catch(function(error) {
//     sap.m.MessageToast.show(error.message);
// });

// setTimeout(function() {
//     if (vRes.i !== undefined) {
//         sap.m.MessageToast.show("Success");
//     }
// }, 3000);

// //
// if (suser !== "" && spassword !== "") {
//     vRes = firebase.auth().signInWithEmailAndPassword(suser, spassword).catch(function(error) {
//         sap.m.MessageToast.show(error.message);
//     });
//     setTimeout(function() {
//         if (vRes.i !== undefined) {
//             var vdispname = suser.replace("@gmail.com", "");
//             that.getView().byId("idusername").setText(vdispname);
//             sap.m.MessageToast.show("Success");
//             that.fnLoginFragClose();
//         }
//     }, 3000);
// }


// //google signUP
// var that = this;
// 			var provider = new firebase.auth.GoogleAuthProvider();
// 			provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// 			firebase.auth().signInWithPopup(provider).then(function(result) {
// 				var token = result.credential.accessToken;
// 				var user = result.user;
// 				that.getView().byId("idusername").setText(result.user.displayName);
// 				sap.m.MessageToast.show("Success");
// 				that.fnLoginFragClose();
// 			}).catch(function(error) {
// 				var errorCode = error.code;
// 				var errorMessage = error.message;
// 				sap.m.MessageToast.show(error.message);
// 				var email = error.email;
// 				var credential = error.credential;
// 			});