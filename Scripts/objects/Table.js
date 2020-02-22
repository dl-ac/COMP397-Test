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
    var Table = /** @class */ (function (_super) {
        __extends(Table, _super);
        // constructor
        function Table() {
            var _this = _super.call(this, "diceTable") || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Table.prototype._checkBounds = function () { };
        // PUBLIC METHODS
        /**
         * This function is used for initialization
         *
         * @memberof Button
         */
        Table.prototype.Start = function () {
            this.name = "Table";
        };
        Table.prototype.Update = function () { };
        Table.prototype.Reset = function () { };
        return Table;
    }(objects.GameObject));
    objects.Table = Table;
})(objects || (objects = {}));
//# sourceMappingURL=Table.js.map