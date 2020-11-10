const btn = document.querySelector(".toggle");
const theme = document.getElementById("theme");
// Listen for a click on the button
btn.addEventListener("click", changeTheme);

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
    writeCookie(false);
  } else {
    MoveSwitch(-1)
    theme.href = "./assets/css/stylelight.css";
    writeCookie(true);
  }
}
function writeCookie(isDark) {
  cookievalue = isDark + ";";
  document.cookie = "darkMode=" + cookievalue;
}

function readCookie() {
  document.write(document.cookie);
}