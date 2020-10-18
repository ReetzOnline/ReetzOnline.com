//create image element on loading window
window.onload = function() {
  var myCV = document.createElement("IMG");
  myCV.setAttribute("src", "images/cv.png");
  myCV.setAttribute("id", "try");
  myCV.setAttribute("opacity", "0");
  document.getElementById('downLoad').appendChild(myCV);
  document.getElementById('try').style.visibility = 'hidden';
  document.getElementById('try').style.opacity = '0';
  document.getElementById('try').style.transition = 'visibility 0s 1s, opacity 1s linear';
}

function showMe() {
  window.onload;
  document.getElementById('try').style.visibility = 'visible';
  document.getElementById('try').style.opacity = '1';
  document.getElementById('try').style.transition = 'opacity 1s linear';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downLoad').onmouseover = showMe;
});


//create alert to allow player to interact with page
document.addEventListener('DOMContentLoaded', function() {
         document.querySelector('button').onclick = function() {
                alert("Let's take you over to Glandor");
         };
});


//play audio on mouseover game button
var firstPlayed = true;
var audi = document.getElementById("game");
function playIt() {
   if (firstPlayed) {
     audi.play();
     firstPlayed = false;
   }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onmouseover = playIt;
});


//change background colour for website
function backing() {
    document.body.style.backgroundColor = this.value;
    if (this.value === "#0e1111") {
      document.body.style.color = "White";
    } else {
      document.body.style.color = "";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('select').onchange = backing;
});
