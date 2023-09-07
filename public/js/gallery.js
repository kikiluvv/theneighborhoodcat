
// JavaScript code to show/hide the scroll-to-top button and handle scrolling

function toggleScrollButton() {
    var button = document.getElementById('up-container');
    if (window.scrollY > 200) {
        button.classList.add('arrow-show'); // Add the "show" class
    } else {
        button.classList.remove('arrow-show'); // Remove the "show" class
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

// Initial check for the scroll position to hide/show the button
toggleScrollButton();





var imageArray = [
    "/public/assets/gallery/sheets/1.jpg",
    "/public/assets/gallery/sheets/2.jpg",
    "/public/assets/gallery/sheets/3.png"
];

var linkUrl = "https://form.jotform.com/232376224013042"; // Jotform URL

var imageGallery = document.getElementById("imageGallery");

imageArray.forEach(function (imageUrl) {
    var imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    var anchor = document.createElement("a");
    anchor.href = linkUrl;
    anchor.target = "_blank";

    var img = document.createElement("img");
    img.src = imageUrl;

    anchor.appendChild(img);
    imageContainer.appendChild(anchor);
    imageGallery.appendChild(imageContainer);
});

