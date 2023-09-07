//----------------------------------------------------------------------------------------------------//



// Here you can add new sheets to the array, 
// Put the images into the sheets folder and
// call the path of the image here.
var imageArray = [
    "/public/assets/gallery/sheets/1.jpg",
    "/public/assets/gallery/sheets/2.jpg"
];

var linkUrl = "https://form.jotform.com/232376224013042"; // Jotform URL




//----------------------------------------------------------------------------------------------------//



var imageGallery = document.getElementById("imageGallery");

imageArray.forEach(function (imageUrl) {
    var imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    var anchor = document.createElement("a");
    anchor.href = linkUrl;
    anchor.target = "_blank";

    var img = document.createElement("img");
    img.src = imageUrl;
    img.className = 'image';

    anchor.appendChild(img);
    imageContainer.appendChild(anchor);
    imageGallery.appendChild(imageContainer);
});



function toggleScrollButton() {
    var button = document.getElementById('up-container');
    if (window.scrollY > 200) {
        button.classList.add('arrow-show'); 
    } else {
        button.classList.remove('arrow-show'); 
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', toggleScrollButton);
document.getElementById('up-container').addEventListener('click', scrollToTop);


toggleScrollButton();

