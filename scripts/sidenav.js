const domReady = function (callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

/**
 * Will grab the scroll location and if its not 
 * 0 will show the side nav button
 */
domReady(function () {
    const sideButton = document.querySelector('.sideNav-button');
    const sideButtonIcon = document.querySelector('.fa-bars');
    window.addEventListener('scroll', function () {
        let scrollPosition = document.body.scrollTop



        if (scrollPosition == 0) {
      
            sideButton.classList.remove("fade")
            sideButtonIcon.classList.remove("fade")
        } else {

            sideButton.classList.add("fade")
            sideButtonIcon.classList.add("fade")

        }

    })

})




function openNav() {
    document.getElementById("mySidenav").style.width = "35%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}