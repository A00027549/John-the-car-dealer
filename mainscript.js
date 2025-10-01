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

        header.style.backgroundImage = `linear-gradient(to right, #00000083, #00000000),url(./assets/${images[iterator]}.jpg)`;
        iterator = iterator > images.length ? 0 : iterator + 1;
    },4000)

})