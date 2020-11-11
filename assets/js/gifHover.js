// Initializing map of gifs
let gifMap = new Map();
gifMap.set("./assets/img/BearMaps.JPG", "./assets/img/BearMapsGif.gif");

// Adding event listener
var imgs = document.querySelectorAll(".proj-container-content img");
imgs.forEach(img => {
    const pathBuilder = img.src.search("assets");
    const path = "./" + img.src.slice(pathBuilder);
    document.getElementById(img.id).onclick = function() {playGif(path, img.id);};
  })


function playGif(imgName, elemID) {
    const elem = document.getElementById(elemID);
    if (gifMap.has(imgName)) {
        elem.src = gifMap.get(imgName);
    }
}
