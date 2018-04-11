/* This is why you shoud use at least jquery: */

var lib = {

    forEachDivOfClass: function(str, func) {

        var listOfDivs = document.getElementsByClassName(str);
        for (var i=0; i < listOfDivs.length; i++){
            func(listOfDivs[i]);
        }
    }

};
