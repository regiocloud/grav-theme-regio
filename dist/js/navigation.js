document.getElementById('hamburger').addEventListener('click', function(){
    this.classList.toggle('is-active');
    document.getElementById('header').classList.toggle('mobile-overlay');
})

var links = document.getElementsByClassName('nav-link');

for (var i=0; i<links.length; i++) {
    links[i].addEventListener('click', function(){
        document.getElementById('header').classList.toggle('mobile-overlay');
        document.getElementById('hamburger').classList.toggle('is-active');
    })
}

// function toggleSubmenu(element) {
//     element.classList.toggle('show');
// }

// const submenuInitItems = document.querySelectorAll('.submenu-init, .submenu2-init');

// submenuInitItems.forEach(item => {
//     item.addEventListener('click', function (event) {
//     event.preventDefault();
//     const submenu = this.querySelector('ul.submenu, ul.submenu2');
//     if (submenu) {
//         toggleSubmenu(submenu);
//     }
//     });
// });
  