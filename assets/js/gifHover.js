// Initializing map of gifs
let gifMap = new Map();
gifMap.set("./assets/img/bearmaps.JPG", "./assets/img/BearMapsGif.gif");
gifMap.set("./assets/img/NBodyExtreme.PNG","./assets/img/NBodyExtremeGif.gif")
gifMap.set("./assets/img/Scheme.PNG", "./assets/img/SchemeGif.gif")
gifMap.set("./assets/img/Cats.PNG", "./assets/img/CatsGif.gif")
gifMap.set("./assets/img/Hog.PNG", "./assets/img/HogGif.gif")
gifMap.set("./assets/img/Ants.PNG", "./assets/img/AntsGif.gif")
gifMap.set("./assets/img/WorldGame.PNG", "./assets/img/WorldGameGif.gif")
gifMap.set("./assets/img/pigcasso.PNG", "./assets/img/pigcasso.gif")




// Add event listeners to add and remove gif
var imgs = document.querySelectorAll("img");
imgs.forEach(img => {
    const pathBuilder = img.src.search("assets");
    const path = "./" + img.src.slice(pathBuilder);
    if (img.id != null) {
        document.getElementById(img.id).addEventListener("mouseenter", function() {playGif(path, img.id);});
        document.getElementById(img.id).addEventListener("mouseleave", function() {playGif(gifMap.get(path), img.id);});
    }
  })

// Switch from gif to not gif or vice versa
function playGif(imgName, elemID) {
    const elem = document.getElementById(elemID);
    if (gifMap.has(imgName)) {
        elem.src = gifMap.get(imgName);
        gifMap.set(gifMap.get(imgName), imgName)
    }
}
