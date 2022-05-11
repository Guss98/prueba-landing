const navMenu = document.getElementById ('nav-menu'),
toggleMenu = document.getElementById ('toggle-menu'),
closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
});



var check = document.querySelector(".check");

check.addEventListener('click', idioma);

function idioma () {
    let id=check.checked;
    if (id==true){
        location.href="../Pruebas/index.html";
    } else {
        location.href="../Pruebas/english.html";
    }
}