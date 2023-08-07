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