window.addEventListener("DOMContentLoaded",(ev)=>{
    const images = [
        "pic1",
        "pic2",
        "pic3",
        "pic4",
        "pic5",
        "pic6",
        "pic7",
        "pic8",
    ];
    const header = document.querySelector("header");
    let iterator = 0;
    setInterval(()=>{
        header.style.backgroundImage = `linear-gradient(to bottom, #00000063, #000000),url(./assets/${images[iterator]}.jpg)`;
        iterator = iterator > images.length ? 0 : iterator + 1;
    },4000)
    
    //work on each turnable image
    const turnableImages = document.querySelectorAll(".turnable-image")
    let index = 0
    turnableImages.forEach((turnableImage)=>{
        turnableImage.style.zIndex = `${index}`
        index--;
    })
})


window.addEventListener("scroll", (ev)=>{})