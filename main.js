var menu = document.getElementById('menu-btn')
var closemenu = document.getElementById('close-btn')
var small = document.getElementById('small-nav')


menu.addEventListener('click', () => {
    resbox.style.right = '0px';
    small.style.display = "none";
})
closemenu.addEventListener('click', () => {
    resbox.style.right = '-100%';
    small.style.display = "flex";
})
