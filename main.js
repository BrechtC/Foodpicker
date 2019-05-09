// Initialize Firebase
var config = {
    apiKey: "AIzaSyDRfZkoQAJDX4I90XrtPAdCc-kC2hRR-tQ",
    authDomain: "foodpicker-a6e2c.firebaseapp.com",
    databaseURL: "https://foodpicker-a6e2c.firebaseio.com",
    projectId: "foodpicker-a6e2c",
    storageBucket: "foodpicker-a6e2c.appspot.com",
    messagingSenderId: "74552983388"
};


firebase.initializeApp(config);


/*
// collectie 
var messagesRef = firebase.database().ref('foodpicker');

// listen for form submit 
document.getElementById('contactForm').addEventListener('submit', submitForm);
//verzend 

*/

var size;

function submitForm() {
    //krijg waardes
    var name = document.getElementById("name").value;


    const db = firebase.firestore();
    const food = db.collection('food');

    food.get().then(snapshot => {
        size = snapshot.size;
        num = size + 1;
        food.doc(num.toString()).set({
            name: name

        });
    });

    function OnDeviceReady() {
        navigator.notification.beep(2);
        navigator.vibrate(2);
    }

}



//sla bericht op in firebase 
function saveMessage(name) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name
    });
}




function getRandom() {
    const db = firebase.firestore();
    const food = db.collection('food');

    food.get().then(snapshot => {
        size = snapshot.size;

    });
    var rnum = r(1, size);
    randomDoc = food.doc(rnum.toString());
    randomDoc.get().then(function (doc) {
        var nname = doc.data().name;
        //alert(nname);
        myFunction(nname);
    });
}

function myFunction(name) {
    var vreet = name;
    document.getElementById("vreet").innerHTML = vreet;
    console.log(vreet);
}

function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function saveName() {
    var inputName = document.getElementById("getName").value;
    var storage = window.localStorage;
    storage.setItem('name', inputName);
    setName();


}

function GetName() {

    var storage = window.localStorage;
    return storage.getItem('name');




}

function setName() {
    var title = document.getElementById("title");
    var naam = GetName();
    if (naam == null || naam == "") {
        title.innerHTML = "FOODPICKER";

    } else {
        title.innerHTML = naam;

    }
}
document.addEventListener("DOMContentLoaded", () => {

    setName();

});
