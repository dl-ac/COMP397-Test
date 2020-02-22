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
    /**
     * scenes/Play.ts - Main play scene
     *
     * Author: Ailton De Lima - 301018951
     * Date: 2020-02-22
     *
     * @export
     * @class Play
     * @extends {objects.Scene}
     */
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
         * Roll each dice and get its result
         *
         * @private
         * @returns {number[]}
         * @memberof Play
         */
        Play.prototype._getDicesResult = function () {
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
            this._dicesLabel = new Array(config.Game.DICES_QTY);
            this._dicesResult = this._getDicesResult();
            // Set the play state
            this._playState = objects.PlayState.IDLE;
            // Create the Dices and Labels
            for (var iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
                this._dices[iCt] = new objects.Dice(posX, this._dicesResult[iCt]);
                this._dicesLabel[iCt] = new objects.Label(this._dicesResult[iCt].toString(), "24px", "Consolas", "#000", posX, config.Game.DICE_RESULT_POS_Y, true);
                posX += 280;
            }
            this._rollButton = new objects.Button("rollButton", 320, 430, true);
            this.Main();
        };
        /**
         * Update the scene according to the current state
         *
         * @memberof Play
         */
        Play.prototype.Update = function () {
            switch (this._playState) {
                case objects.PlayState.REQUEST_ROLL:
                    // Get the dices results
                    this._dicesResult = this._getDicesResult();
                    // Request each dice to roll and display the result, clean current result
                    for (var iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
                        this._dices[iCt].RollDice(this._dicesResult[iCt]);
                        this._dicesLabel[iCt].setText(" ");
                    }
                    // Set the state to rolling
                    this._playState = objects.PlayState.ROLLING;
                    break;
                case objects.PlayState.ROLLING:
                    var stillRolling = false;
                    for (var iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
                        this._dices[iCt].Update();
                        stillRolling = stillRolling || this._dices[iCt].isRolling;
                    }
                    if (!stillRolling) {
                        this._playState = objects.PlayState.PROCESS_RESULTS;
                    }
                    break;
                case objects.PlayState.PROCESS_RESULTS:
                    for (var iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
                        this._dicesLabel[iCt].setText(this._dicesResult[iCt].toString());
                    }
                    this._playState = objects.PlayState.IDLE;
                    break;
            }
        };
        /**
         * Put the objects created on the screen
         *
         * @memberof Play
         */
        Play.prototype.Main = function () {
            var _this = this;
            for (var iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
                this.addChild(this._dices[iCt]);
                this.addChild(this._dicesLabel[iCt]);
            }
            this.addChild(this._rollButton);
            this._rollButton.on("click", function () {
                if (_this._playState == objects.PlayState.IDLE) {
                    _this._playState = objects.PlayState.REQUEST_ROLL;
                }
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map