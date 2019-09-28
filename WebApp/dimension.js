<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD-5zysIQ8fA3qkR5RxjiAIXdhSVsN0pUw",
    authDomain: "application-demo-6d2ce.firebaseapp.com",
    databaseURL: "https://application-demo-6d2ce.firebaseio.com",
    projectId: "application-demo-6d2ce",
    storageBucket: "application-demo-6d2ce.appspot.com",
    messagingSenderId: "969412805118",
    appId: "1:969412805118:web:56d49d3243c04ee1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  const docRef = firestore.doc("samples/form");
  const outputNumberField = document.querySelector("#f");
const outputNumberField1 = document.querySelector("#u");
const outputNumberField2 = document.querySelector("#ff");

function fn1()
            {
                var rd1 = document.getElementById("rd1");
                var rd2 = document.getElementById("rd2");
                var rd3 = document.getElementById("rd3");
                //the value printed in the alert box in "value at input tag"

                if(rd1.checked==true)
                {
                alert("The channel selected is: "+rd1.value);
                final = rd1.value;
                }
                else if(rd2.checked==true)
                {
                alert("The channel selected is :"+rd2.value);
                final = rd2.value;
                }
                else if(rd3.checked==true)
                {
                alert("The channel selected is :"+rd3.value);
                final = rd3.value;
                }
                else
                alert("no channel is selected");
                
            }
            if(final==fedex){
            fidex = length.value*bre.value*height.value;
            }
            