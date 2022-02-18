myID = document.getElementById("customID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 800) {
    myID.className = "logo2 content show"
  } else {
    myID.className = "logo2 content hide"
  }
};

window.addEventListener("scroll", myScrollFunc);