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
     * scenes/PlayFour.ts - Main play scene with Four dices
     *
     * Author: Ailton De Lima - 301018951
     * Date: 2020-02-22
     *
     * @export
     * @class PlayFour
     * @extends {objects.Scene}
     */
    var PlayFour = /** @class */ (function (_super) {
        __extends(PlayFour, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function PlayFour() {
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
        PlayFour.prototype._getDicesResult = function () {
            var result = new Array(PlayFour.DICES_QTY);
            for (var iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
                result[iCt] = Math.floor(Math.random() * 6 + 1);
            }
            return result;
        };
        PlayFour.prototype._getFinalResult = function () {
            var result = 0;
            var minVal = 7;
            for (var iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
                result += this._dicesResult[iCt];
                if (this._dicesResult[iCt] < minVal) {
                    minVal = this._dicesResult[iCt];
                }
            }
            result -= minVal;
            return result;
        };
        // PUBLIC METHODS
        //initialize and instatiate
        PlayFour.prototype.Start = function () {
            var posX = 110;
            this._dices = new Array(PlayFour.DICES_QTY);
            this._dicesLabel = new Array(PlayFour.DICES_QTY);
            this._dicesResult = this._getDicesResult();
            // Title and result
            this._title = new objects.Label("Roll 4d6", "48px", "Consolas", "#000", 320, 40, true);
            this._resultLabel = new objects.Label("Result: " + this._getFinalResult(), "42px", "Consolas", "#000", 60, 330, false);
            // Create the table
            this._diceTable = new objects.Table();
            // Set the play state
            this._playState = objects.PlayState.IDLE;
            // Create the Dices and Labels
            for (var iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
                this._dices[iCt] = new objects.Dice(posX, this._dicesResult[iCt], 0.5);
                this._dicesLabel[iCt] = new objects.Label(this._dicesResult[iCt].toString(), "24px", "Consolas", "#000", posX, config.Game.DICE_RESULT_POS_Y, true);
                posX += 140;
            }
            this._rollButton = new objects.Button("rollButton", 320, 430, true);
            this.Main();
        };
        /**
         * Update the scene according to the current state
         *
         * @memberof Play
         */
        PlayFour.prototype.Update = function () {
            switch (this._playState) {
                case objects.PlayState.REQUEST_ROLL:
                    // Get the dices results
                    this._dicesResult = this._getDicesResult();
                    // Request each dice to roll and display the result, clean current result
                    for (var iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
                        this._dices[iCt].RollDice(this._dicesResult[iCt]);
                        this._dicesLabel[iCt].setText(" ");
                    }
                    this._resultLabel.setText("Result: ?");
                    // Set the state to rolling
                    this._playState = objects.PlayState.ROLLING;
                    break;
                case objects.PlayState.ROLLING:
                    var stillRolling = false;
                    for (var iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
                        this._dices[iCt].Update();
                        stillRolling = stillRolling || this._dices[iCt].isRolling;
                    }
                    if (!stillRolling) {
                        this._playState = objects.PlayState.PROCESS_RESULTS;
                    }
                    break;
                case objects.PlayState.PROCESS_RESULTS:
                    for (var iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
                        this._dicesLabel[iCt].setText(this._dicesResult[iCt].toString());
                    }
                    this._resultLabel.setText("Result: " + this._getFinalResult());
                    this._playState = objects.PlayState.IDLE;
                    break;
            }
        };
        /**
         * Put the objects created on the screen
         *
         * @memberof Play
         */
        PlayFour.prototype.Main = function () {
            var _this = this;
            this.addChild(this._diceTable);
            this.addChild(this._title);
            this.addChild(this._resultLabel);
            for (var iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
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
        // CONSTANTS
        PlayFour.DICES_QTY = 4;
        return PlayFour;
    }(objects.Scene));
    scenes.PlayFour = PlayFour;
})(scenes || (scenes = {}));
//# sourceMappingURL=PlayFour.js.map