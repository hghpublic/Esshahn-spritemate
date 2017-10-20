"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Info = function Info(window, config) {
    var _this = this;

    _classCallCheck(this, Info);

    this.config = config;
    this.window = window;

    var template = "\n    <div id=\"info\">\n        <p>Welcome to</p>\n        <img autofocus src=\"img/logo.png\" id=\"logo\">\n        <p>A tool to draw sprites for the Commodore 64</p>\n\n        <fieldset>\n            <legend>What's new</legend>\n            <h1>October 20, 2017</h1>\n\n            <h2>Keyboard Shortcuts</h2>\n            <p>\n            The most common actions have received hotkeys for quick access. \n            Using hotkeys in a browser is always a bit tricky, as many combinations are taken by the browser (like CMD/CTRL + C for \"copy\"). \n            Therefore some shortcuts might seem less intuitive. These functions are available by pressing keys now:\n            </p>\n            \n            <br/>\n\n            <p>\n            (1,2,3,4) - set one of the four available pens/colors<br/>\n            (f) - toggle fullscreen on/off<br/>\n            (d) - toggle between \"draw\" and \"fill\" modes<br/>\n            (z) - undo, (shift + z) = redo<br/>\n            (m) - toggle singlecolor/multicolor<br/>\n            (cursor left, right) - navigate through sprite list (thx2 Wiebo)<br/>\n            </p>\n\n            <h2>Bug fixes and changes</h2>\n\n            <p>\n                - Tooltips on the icons now look nicer (thx2 korshun)<br/>\n                - Fixed a bug in the SpritePad importer<br/>\n                - small visual and bug fixes\n            </p>\n\n            <h1>October 19, 2017</h1>\n\n            <p>\n                - SpritePad 2.x overlay settings will be imported & exported now<br/>\n                - new sprites inherit the multicolor setting of the current sprite (thx2 Wiebo)<br/>\n                - sprite index & amount of sprites shown in list window title (thx2 Wiebo)<br/>\n                - assembler source now supports KICK ASS and ACME syntax (thx2 korshun)<br/>\n                - zoom icons fade out when min/max level is reached<br/>\n                - more speed enhancements\n            </p>\n            <h1>October 18, 2017</h1>\n            <h2>Sprite Overlays</h2>\n            <p>Toggle sprite overlays in preview window. The following sprite will be used as overlay. The preview window shows both sprites and the editor window shows the other sprite with reduced visibility (like onion skinning). Please note that currently sprite overlay information is stored in native spritemate format only.</p>\n            <h2>Bug fixes and changes</h2>\n            <p>\n                - spritemate should work again in Firefox (thx2 merman1974)<br/>\n                - zoom levels for windows have been increased (thx2 INC$D021)<br/>\n                - fixed a crazy stupid thing in pixel display code<br/>\n                - huge speed improvements for sprite display\n            </p>\n        </fieldset>\n\n        <p>Documentation: <a target=\"_blank\" href=\"https://github.com/Esshahn/spritemate\">https://github.com/Esshahn/spritemate</a></p>\n        <p>Ingo Hinterding / <a target=\"_blank\" href=\"http://csdb.dk/scener/?id=27239\">awsm</a> of <a target=\"_blank\" href=\"http://csdb.dk/group/?id=7228\">Mayday!</a>\n        / <a target=\"_blank\" href=\"http://www.awsm.de\">www.awsm.de</a> / <a target=\"_blank\" href=\"http://www.twitter.com/awsm9000/\">@awsm9000</a></p>\n        <br/>\n        <p>Report bugs, ideas & requests to ingo (at) awsm (dot) de</p>\n        <p>Please do not share this link publicly yet. Thank you for testing!</p>\n        <br/>\n        <button id=\"button-info\">Let's go!</button>\n    </div>\n    ";
    $("#window-" + this.window).append(template);

    $("#window-" + this.window).dialog({ show: 'fade', hide: 'fade' });
    $('#button-info').mouseup(function (e) {
        return $("#window-" + _this.window).dialog("close");
    });
};