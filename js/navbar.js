window.onload = function (ev) {
    // NavBar buttons highlight
    lib.forEachDivOfClass("navigation-bar-button", function (div) {
        div.onmouseover  = function () { this.style.color = "#88FF88"; };
        div.onmouseleave = function () { this.style.color = "#FFFFFF"; };
    });
};