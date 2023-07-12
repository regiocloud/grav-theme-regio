window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.scrollY >= 1) {
        if (header) {
            header.style.boxShadow = "0px 6px 8px -1px #90989d";
        }
    } else {
        if (header) {
            header.style.boxShadow = "";
        }
    }
};