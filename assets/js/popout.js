var imgsProjs = document.querySelectorAll("#pictures img");
let popOutMap = new Map();
imgsProjs.forEach(img => {
    const projid = "proj" + img.id.slice(7);
    popOutMap.set(img.id, projid);
})


function unhidePopout(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove("hidden");
}

imgsProjs.forEach(img => {
    const pathBuilder = img.src.search("assets");
    const path = "./" + img.src.slice(pathBuilder);
    document.getElementById(img.id).addEventListener("click", function() {unhidePopout(popOutMap.get(img.id));});
  })

function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden')
}


function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');
	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}
document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;