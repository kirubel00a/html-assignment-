const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
    
});

function swapImages() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');

    // Get the current source of each image
    var src1 = image1.src;
    var src2 = image2.src;

    // Swap the source of the images
    image1.src = src2;
    image2.src = src1;
}
