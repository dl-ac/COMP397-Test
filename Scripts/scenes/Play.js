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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        /**
         * Function to roll the dices
         *
         * @private
         * @memberof Play
         */
        Play.prototype.RollDices = function () {
            var dices = this.GetDicesResult();
        };
        /**
         * Roll each dice and get its result
         *
         * @private
         * @returns {number[]}
         * @memberof Play
         */
        Play.prototype.GetDicesResult = function () {
            var result = new Array(config.Game.DICES_QTY);
            for (var iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
                result[iCt] = Math.floor(Math.random() * 6 + 1);
            }
            return result;
        };
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            var posX = 180;
            this._dices = new Array(config.Game.DICES_QTY);
            this._dicesResult = new Array(config.Game.DICES_QTY);
            // Set the play state
            this._playState = objects.PlayState.IDLE;
            // Create the Dices and Labels
            for (var iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
                this._dices[iCt] = new objects.Dice(posX);
                this._dicesResult[iCt] = new objects.Label("R", "24px", "Consolas", "#000", posX, config.Game.DICE_RESULT_POS_Y, true);
                posX += 280;
            }
            this._rollButton = new objects.Button("rollButton", 320, 430, true);
            this.Main();
        };
        Play.prototype.Update = function () {
            switch (this._playState) {
            }
        };
        Play.prototype.Main = function () {
            for (var iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
                this.addChild(this._dices[iCt]);
                this.addChild(this._dicesResult[iCt]);
            }
            this.addChild(this._rollButton);
            this._rollButton.on("click", this.RollDices);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map