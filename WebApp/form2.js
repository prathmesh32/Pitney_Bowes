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
const inputTextField = document.querySelector("#name");

const docRef = firestore.doc("Pitney Bowes/parcel   ");
const outputHeader = document.querySelector("#name");
const outputHeader1 = document.querySelector("#city");
const outputHeader2 = document.querySelector("#phone");
const inputTextField1 = document.querySelector("#building");
const inputTextField2 = document.querySelector("#street");
const inputTextField3 = document.querySelector("#address");
const inputNumberField1 = document.querySelector("#pincode");
const inputNumberField = document.querySelector("#phone");

const l = document.querySelector("#l");
const b = document.querySelector("#b");
const he = document.querySelector("#h");
const w = document.querySelector("#width");
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");


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
        
        


saveButton.addEventListener("click", function(){
   const textToSave = inputTextField.value;
    const textToSave1 = inputTextField1.value;
    const textToSave2 = inputTextField2.value;
    const textToSave3 = inputTextField3.value;
   
    const textToSave5 = l.value;
    const textToSave6 = b.value;
    const textToSave7 = he.value;
    const textToSave8 = w.value;

    const numberToSave1 = inputNumberField1.value;
    const numberToSave = inputNumberField.value;
    console.log("I am going to save ");
    docRef.set({
       name : textToSave,
        buildname : textToSave1,
        phoneNumber: numberToSave,
        streetname : textToSave2,
        fulladdress : textToSave3,
        pincode : numberToSave1,
        
        length : textToSave5,
        bre : textToSave6,
        heigth : textToSave7,
        weight : textToSave8,

        
    }).then(function(){
        console.log("Status saved!");
            });
                
                  
});
/*


loadButton.addEventListener("click", function(){
    docRef.get().then(function (doc){
        if (doc && doc.exists){
            const myData = doc.data();
            const myData1 = doc.data();
            const myData2 = doc.data();
            const myData3 = doc.data();
            const myData4 = doc.data();
            outputHeader.innerText = "Name: " + myData.name;
            outputHeader1.innerText = "city :"+ myData1.cityName;
            outputHeader2.innerText="phone :"+ myData2.phoneNumber+ myData3.youtube+ myData4.selectTag;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});


*/


