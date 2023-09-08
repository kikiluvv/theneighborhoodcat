//----------------------------------------------------------------------------------------------------//



// Here you can add new sheets to the array, 
// Put the images into the sheets folder and
// call the path of the image here.
var imageArray = [
    "/public/assets/gallery/sheets/1.png",
    "/public/assets/gallery/sheets/2.png",
    "/public/assets/gallery/sheets/3.png",
    "/public/assets/gallery/sheets/4.png",
    "/public/assets/gallery/sheets/5.png",
    "/public/assets/gallery/sheets/6.png",
    "/public/assets/gallery/sheets/7.png",
    "/public/assets/gallery/sheets/8.png",
    "/public/assets/gallery/sheets/9.png",
    "/public/assets/gallery/sheets/10.png",
    "/public/assets/gallery/sheets/11.png",
    "/public/assets/gallery/sheets/12.png",
    "/public/assets/gallery/sheets/13.png",
    "/public/assets/gallery/sheets/14.png",
    "/public/assets/gallery/sheets/15.png",
    "/public/assets/gallery/sheets/16.png",
    "/public/assets/gallery/sheets/17.png",
    "/public/assets/gallery/sheets/18.png",
    "/public/assets/gallery/sheets/19.png",
    "/public/assets/gallery/sheets/20.png",
    "/public/assets/gallery/sheets/21.png",
    "/public/assets/gallery/sheets/22.png",
    "/public/assets/gallery/sheets/23.png",
    "/public/assets/gallery/sheets/24.png",
    "/public/assets/gallery/sheets/25.png",
    "/public/assets/gallery/sheets/26.png",
    "/public/assets/gallery/sheets/27.png",
    "/public/assets/gallery/sheets/28.png",
    "/public/assets/gallery/sheets/29.png",
    "/public/assets/gallery/sheets/30.png",
    "/public/assets/gallery/sheets/31.png",
    "/public/assets/gallery/sheets/32.png",
    "/public/assets/gallery/sheets/33.png",
    "/public/assets/gallery/sheets/34.png",
    "/public/assets/gallery/sheets/35.png",
    "/public/assets/gallery/sheets/36.png",
    "/public/assets/gallery/sheets/37.png",
    "/public/assets/gallery/sheets/38.png",
    "/public/assets/gallery/sheets/39.png",
    "/public/assets/gallery/sheets/40.png",
    "/public/assets/gallery/sheets/41.png",
    "/public/assets/gallery/sheets/42.png"
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

