const btn = document.querySelector(".toggle");
const theme = document.getElementById("theme");
document.cookie = "isDark = false"
// Listen for a click on the button
btn.addEventListener("click", changeTheme);

function changeTheme() {
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") == "./assets/css/stylelight.css") {
      // ... then switch it to "dark-theme.css"
      theme.href = "./assets/css/styledark.css";
    // Otherwise...
    } else {
      // ... switch it to "light-theme.css"
      theme.href = "./assets/css/stylelight.css";
    }
}

// window.onload(function () {
//     var dark = document.cookie;

// });
