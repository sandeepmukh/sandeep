const btn = document.querySelector(".toggle");
const theme = document.getElementById("theme");
// Listen for a click on the button
btn.addEventListener("click", changeTheme);
// Add handling for cookies
window.onload = loadupTheme();

/* direction = -1 for going from dark to light
else = 1
*/
function MoveSwitch(direction) {
  var elem = document.getElementById("switch");   
  var pos = 5;
  var end = 45
  backwards = direction < 0;
  if (backwards) {
    pos = 45;
    end = 5;
  }
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == end) {
      clearInterval(id);
    } else {
      if (backwards) {
        if (pos <= end) {
          clearInterval(id);
        }
        else {
          pos--; 
          elem.style.left = pos + 'px'; 
        }
      }
      else {
        if (pos >= end) {
          clearInterval(id);
        }
        else {
          pos++; 
          elem.style.left = pos + 'px'; 
        }
      }
    }
  }
}

function changeTheme() {
  if (theme.getAttribute("href") == "./assets/css/stylelight.css") {
    MoveSwitch(1)
    theme.href = "./assets/css/styledark.css";
    writeCookie(true);
  } else {
    MoveSwitch(-1)
    theme.href = "./assets/css/stylelight.css";
    writeCookie(false);
  }
}

function writeCookie(isDark) {
  cookievalue = isDark + "; path=/";
  document.cookie = "isDark=" + cookievalue;
}

function loadupTheme() {
  var isDark = getTheme();
  if (isDark == "true") {
    theme.href = "./assets/css/styledark.css";
  }
  else {
    theme.href = "./assets/css/stylelight.css";
  }
}

function getCookie() {
  var name = "isDark=";
  var cookie = decodeURIComponent(document.cookie);
  cookie = cookie.split(';');
  for(var i = 0; i <cookie.length; i++) {
    var char= cookie[i];
    while (char.charAt(0) == ' ') {
      char= char.substring(1);
    }
    if (char.indexOf(name) == 0) {
      return char.substring(name.length, char.length);
    }
  }
  return "";
}