window.onload = function (ev) {

    // Title animation
    lib.forEachDivOfClass("title-text", function (div) {
        div.onmouseenter = function () { div.style.transform = "scale(1.5, 1.5)"; };
        div.onmouseleave = function () { div.style.transform = "scale(1  , 1  )"; };
    });

    // Fancy modules animation
    lib.forEachDivOfClass("module-image-background", function (div) {
        div.onmouseover  = function () { div.style.transform = "scale(1.2,1.2)"; };
        div.onmouseleave = function () { div.style.transform = "scale(1  ,1  )"; };
    });

    // NavBar buttons highlight
    lib.forEachDivOfClass("navigation-bar-button", function (div) {
        div.onmouseover  = function () { this.style.color = "#88FF88"; };
        div.onmouseleave = function () { this.style.color = "#FFFFFF"; };
    });

    // RPI image (central box)
    var div = document.getElementById("rpi");
    div.onmouseover  = function () { this.style.transform = "rotate(15deg)"; console.log("rotateIn");  };
    div.onmouseleave = function () { this.style.transform = "rotate(0deg)";  console.log("rotateOut"); };

    var appDiv = document.getElementById("app-picture");
    appDiv.onmouseover  = function () { this.style.transform = "rotate(5deg)"; console.log("rotateIn");  };
    appDiv.onmouseleave = function () { this.style.transform = "rotate(0deg)";  console.log("rotateOut"); };
};