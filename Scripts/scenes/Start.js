"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start.prototype.Start = function () {
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("COMP397 - Midterm Test", "40px", "Consolas", "#000000", 320, 180, true);
            // Labels
            this._play2Label = new objects.Label("Play 2d6", "36px", "Consolas", "#006400", 160, 370, true);
            this._play4Label = new objects.Label("Play 4d6", "36px", "Consolas", "#FF0000", 480, 370, true);
            // buttons
            this._startTwoButton = new objects.Button("startButton", 160, 430, true);
            this._startFourButton = new objects.Button("startButton", 480, 430, true);
            this.Main();
        };
        Start.prototype.Update = function () { };
        Start.prototype.Main = function () {
            this.addChild(this._welcomeLabel);
            this.addChild(this._play2Label);
            this.addChild(this._play4Label);
            this.addChild(this._startTwoButton);
            this.addChild(this._startFourButton);
            this._startTwoButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._startFourButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY_FOUR;
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map