"use strict";
exports.__esModule = true;
exports.Tiger = void 0;
var Tiger = /** @class */ (function () {
    function Tiger(obj) {
        this.obj = obj;
    }
    Tiger.prototype.getDetails = function () {
        console.log("".concat(this.obj.species, " has ").concat(this.obj.legs, " legs...."));
    };
    return Tiger;
}());
exports.Tiger = Tiger;
