// ==UserScript==
// @name         RGAA Checker
// @version      0.1
// @description  Validation automatisée RGAA
// @author       Jonathan JACQUES
// @include *
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant none
// ==/UserScript==
(function () {
    "use strict";
    window.rgaa = {
        core: () => {
            $("<div id='rgaaUI'>").appendTo("body");
        }
    }

    window.rgaa.core();
}());


// IMAGES //
/*(function () {
    "use strict";
    window.rgaa.image = {
        init: function () {
            alert ("ok");
        }
    };
}());*/