var fff = document.getElementById('b');
var images = [
  "https://i.pinimg.com/736x/42/14/c1/4214c1c2a3552a032972ff4ecb46144a.jpg",
  "https://i.pinimg.com/736x/7b/d7/6c/7bd76c070b5b685f2ce78256dce76bc1.jpg",
  "https://i.pinimg.com/736x/03/51/8a/03518a6e7c435e3e3a2ff7a799649b66.jpg"
];
var i = 0;

setInterval(function() {
  if (!fff) {
    fff = document.getElementById('b'); // In case it changes
  }
  fff.outerHTML = `<img src='${images[i]}' id='b'>`;
  i++;
  if (i >= images.length) {
    i = 0;
  }
}, 2000);
