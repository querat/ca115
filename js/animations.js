var lib = {

    forEachDivOfClass: function(str, func) {

        var listOfDivs = document.getElementsByClassName(str);
        for (var i=0; i < listOfDivs.length; i++){
            func(listOfDivs[i]);
        }
    }

};


function tweenScaleUp(element, scale) {
    // if (element.classList.contains("animated"))
    //     return;
    // element.classList.toggle("changed");
    element.style.transform = "scale("+scale.toString()+", "+scale.toString()+")";
}


/* This is why you shoud use at least jquery: */
window.onload = function (ev) {

    lib.forEachDivOfClass("module-image-background", function (div) {
        div.onmouseover  = function () { tweenScaleUp(this, 1.2);            };
        div.onmouseleave = function () { div.style.transform = "scale(1,1)"; };
    });

    lib.forEachDivOfClass("navigation-bar-button", function (div) {
        div.onmouseover  = function () { this.style.color = "#88FF88"; };
        div.onmouseleave = function () { this.style.color = "#FFFFFF"; };
    });


};