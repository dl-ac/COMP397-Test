"use strict";
var config;
(function (config) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.SCREEN_WIDTH = 640;
        Game.SCREEN_HEIGHT = 480;
        Game.FPS = 60; // 60 Frames per second
        Game.DICES_QTY = 2;
        Game.DICE_POS_Y = 150;
        Game.DICE_RESULT_POS_Y = 280;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map