// Initializing map of gifs
let gifMap = new Map();
gifMap.set("./assets/img/BearMaps.JPG", "./assets/img/BearMapsGif.gif");
gifMap.set("./assets/img/NBodyExtreme.PNG","./assets/img/NBodyExtremeGif.gif")
gifMap.set("./assets/img/Scheme.PNG", "./assets/img/SchemeGif.gif")
gifMap.set("./assets/img/Cats.PNG", "./assets/img/CatsGif.gif")


imgs = document.querySelectorAll(".proj-container-content img");
imgs.forEach(img => {
    document.getElementById(img.id).addEventListener("mouseenter", function() {playGif(img.src,img.id)});
    document.getElementById(img.id).addEventListener("mouseleave", function() {playGif(gifMap.get(img.src),img.id)});
    console.log(img.id + " " + img.src);
});

var bearmaps = document.getElementById("bearmaps");
bearmaps.addEventListener("mouseenter", function() {playGif("./assets/img/BearMaps.JPG","bearmaps")});
bearmaps.addEventListener("mouseleave", function() {playGif(gifMap.get("./assets/img/BearMaps.JPG"),"bearmaps")});
var nbody = document.getElementById("Nbody");
nbody.addEventListener("mouseenter", function() {playGif("./assets/img/NBodyExtreme.PNG","Nbody")});
nbody.addEventListener("mouseleave", function() {playGif(gifMap.get("./assets/img/NBodyExtreme.PNG"),"Nbody")});
var scheme = document.getElementById("scheme");
scheme.addEventListener("mouseenter", function() {playGif("./assets/img/Scheme.PNG","scheme")});
scheme.addEventListener("mouseleave", function() {playGif(gifMap.get("./assets/img/Scheme.PNG"),"scheme")});
var cats = document.getElementById("cats");
cats.addEventListener("mouseenter", function() {playGif("./assets/img/Cats.PNG","cats")});
cats.addEventListener("mouseleave", function() {playGif(gifMap.get("./assets/img/Cats.PNG"),"cats")});


function playGif(imgName, elemID) {
    const elem = document.getElementById(elemID);
    if (gifMap.has(imgName)) {
        elem.src = gifMap.get(imgName);
        gifMap.set(gifMap.get(imgName), imgName)
        console.log("swapped");
    }
}
