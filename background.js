function show() {
    var interval = {
        type: "basic",
        iconUrl: "icon48.png",
        title: "Drink water",
        message: "Its time to hydrate yourself!"
    }
    chrome.notifications.create('drink', interval);
    chrome.tts.speak('Its time to hydrate yourself');
  }
// var x;
//   document.addEventListener("DOMContentLoaded", function(event){
//   document.getElementById("btn").addEventListener('click',function(){
//      x = document.getElementById("time").value;
//   });
// });
// console.log(x);

  setInterval(show, 2700000);

// var interval = {
//     type: "basic",
//     iconUrl: "icon48.png",
//     title: "Drink water",
//     message: "Its time to hydrate yourself!"
// }
// chrome.notifications.create('drink', interval);