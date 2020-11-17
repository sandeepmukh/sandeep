var screenSize = screen.width;
let links = document.querySelectorAll("a");
function switchProj() {
    if (screenSize < 800) {
        links.forEach(element => {
            if (element.href.includes("projects.html")) {
                element.href = "projects2.html";
            }
        });
    }
}
window.onload = switchProj;