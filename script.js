var btn = document.getElementById("btn")
btn.addEventListener(`click`, function () {
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

})


// slider
var imgs = Array.from(document.getElementsByClassName("card-img"))
var lightBoxContainer = document.getElementById("box")
var lightBoxItem = document.getElementById("boxItems")
var next = document.getElementById("next")
var perv = document.getElementById("perv")
var currentIndexSlide = 0;


for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {

        currentIndexSlide = imgs.indexOf(e.target)
        var imgSrc = e.target.src
        lightBoxItem.style.backgroundImage = `url('${imgSrc}')`;

        // can't do it!!!
        // document.getElementsByClassName("card-img").style.opacity = 1;
    })
}

next.addEventListener("click", nextSlide)

function nextSlide() {
    currentIndexSlide++

    if (currentIndexSlide > imgs.length - 1) {
        currentIndexSlide = 0
    }
    var imgSrc = imgs[currentIndexSlide].src
    lightBoxItem.style.backgroundImage = `url('${imgSrc}')`;

}


perv.addEventListener("click", pervSlide)

function pervSlide() {
    currentIndexSlide--

    if (currentIndexSlide < 0) {
        currentIndexSlide = imgs.length - 1
    }
    var imgSrc = imgs[currentIndexSlide].src
    lightBoxItem.style.backgroundImage = `url('${imgSrc}')`;

}

// BOM
var header = document.getElementById("header");

window.onscroll = function () {
    if (window.scrollY > 200) {
        header.classList.add("header-Fixed");
    }
    else {
        header.classList.remove("header-Fixed");
    }
}



