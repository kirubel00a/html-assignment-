const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classlist.toggle('is-active');
    menulinks.classlist.toggle('active');
    
});