window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.scrollY >= 1) {
        if (header) {
            header.style.boxShadow = "0px 4px 10px 0 rgba(0,0,0,0.16)";
        }
    } else {
        if (header) {
            header.style.boxShadow = "";
        }
    }
};