let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let slides = document.getElementsByClassName("slidesfade");
    let infos = document.getElementsByClassName("information");

    // Dölj informationen för alla bilder
    for (let i = 0; i < infos.length; i++) {
        infos[i].style.display = "none";
    }
    if (slideIndex >= 0 && slideIndex < slides.length) {
        infos[slideIndex].style.display = "block";
    }
    // Visa den aktuella bildens information
    if (slideIndex >= slides.length) {slideIndex = 0}    
    if (slideIndex < 0) {slideIndex = slides.length - 1}

    infos[slideIndex].style.display = "block";

    // Justera positionen för bilderna för att centrera dem
    let containerWidth = document.querySelector('.container').offsetWidth;
    let totalWidth = 0;
    for (let i = 0; i < slides.length; i++) {
        totalWidth += slides[i].offsetWidth;
    }
    let offset = (containerWidth - totalWidth) / (slides.length - 1);
    let currentOffset = 0;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = currentOffset + "px";
        currentOffset += slides[i].offsetWidth + offset;
    }
}
