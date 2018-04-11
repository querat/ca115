var lib = {

    forEachDivOfClass: function(str, func) {

        var listOfDivs = document.getElementsByClassName(str);
        for (var i=0; i < listOfDivs.length; i++){
            func(listOfDivs[i]);
        }
    }

};


function reverseColors(element) {
    console.log("recolor");
}

function tweenScaleElement(element) {
    element.isScaling = false;
}



window.onload = function (ev) {
    lib.forEachDivOfClass("module-image-background", tweenScaleElement);
    lib.forEachDivOfClass("navigation-bar-button", function (element) {
        element.onmouseover  = function () { this.style.color = "#88FF88"; };
        element.onmouseleave = function () { this.style.color = "#FFFFFF"; };
    })
};