const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
var hamburgerMenu = document.querySelector('.hamburger-menu');

const linksBtn = document.querySelectorAll('.links');

hamburgerBtn.addEventListener('click', function() {
    
    hamburgerMenu.classList.add('show-side-menu');
});

closeBtn.addEventListener('click', function() {
    
    hamburgerMenu.classList.remove('show-side-menu');
});

linksBtn.forEach(function(links) {
    links.addEventListener('click', function() {
        hamburgerMenu.classList.remove('show-side-menu');
    })
})



