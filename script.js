const about = document.getElementById("about");
const secAbout = document.getElementById("about-us");
const imgBg = document.getElementById("image-bg");
const imgLogo = document.getElementById("img-logo");
const photos = document.getElementById("photos");
const secPhoto = document.getElementById("sec-photos");

const videos = document.getElementById("videos");
const secVideo = document.getElementById("sec-videos");


about.addEventListener("click", function(){
    secAbout.style.display = "block";
    secPhoto.style.display = "none";
    secVideo.style.display = "none";
    imgBg.style.display = "none"
})

imgLogo.addEventListener("click", function () {
  secAbout.style.display = "none";
  secPhoto.style.display = "none";
  secVideo.style.display = "none";
  imgBg.style.display = "block";
});

photos.addEventListener("click", function () {
  secPhoto.style.display = "block";
  secAbout.style.display = "none";
  secVideo.style.display = "none";
  imgBg.style.display = "none";
});

videos.addEventListener("click", function () {
  secVideo.style.display = "block";
  secAbout.style.display = "none";
  secPhoto.style.display = "none";
  imgBg.style.display = "none";
});