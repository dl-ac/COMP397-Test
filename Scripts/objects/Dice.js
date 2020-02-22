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
var objects;
(function (objects) {
    /**
     * objects/Dice.ts - Dice class to represent the dice image and events
     *
     * Author: Ailton De Lima - 301018951
     * Date: 2020-02-22
     *
     * @export
     * @class Dice
     * @extends {GameObject}
     */
    var Dice = /** @class */ (function (_super) {
        __extends(Dice, _super);
        // CONSTRUCTOR
        function Dice(x, value) {
            if (x === void 0) { x = 180; }
            var _this = _super.call(this, "dice" + value.toString(), x, config.Game.DICE_POS_Y, true) || this;
            _this._diceValue = value;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Dice.prototype, "isRolling", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._isRolling;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        Dice.prototype._checkBounds = function () {
            if (this._rollCount >= Dice.ROLL_FRAMES) {
                this.image = config.Game.ASSETS.getResult("dice" + this._diceValue.toString());
                this.Reset();
            }
        };
        Dice.prototype._roll = function () {
            // Change the face each n frames
            if (this._rollCount % Dice.CHANGE_FACE_COUNT == 0) {
                var randomFace = Math.floor(Math.random() * 6 + 1);
                this.image = config.Game.ASSETS.getResult("dice" + randomFace.toString());
            }
            this.rotation += 10;
            this._rollCount++;
        };
        // PUBLIC METHODS
        Dice.prototype.Start = function () {
            this.Reset();
        };
        Dice.prototype.Update = function () {
            if (this._isRolling) {
                this._roll();
                this._checkBounds();
            }
        };
        Dice.prototype.Reset = function () {
            this._rollCount = 0;
            this._isRolling = false;
            this.rotation = 0;
        };
        Dice.prototype.RollDice = function (value) {
            this._diceValue = value;
            this._isRolling = true;
        };
        Dice.ROLL_FRAMES = 120;
        Dice.CHANGE_FACE_COUNT = 5;
        return Dice;
    }(objects.GameObject));
    objects.Dice = Dice;
})(objects || (objects = {}));
//# sourceMappingURL=Dice.js.map