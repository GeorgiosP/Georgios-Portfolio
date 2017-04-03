
const domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

/**
 * Will grab the scroll location and if its not 
 * 0 will show the side nav button
 */
domReady(function(){
    window.addEventListener('scroll', function () {
        let scrollPosition = document.body.scrollTop
        const sideButton = document.getElementById("sideNav-button");

        if (scrollPosition == 0) {
            sideButton.style.visibility = "hidden";
        } else {
            sideButton.style.visibility = "visible";

        }

    })

})




function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}