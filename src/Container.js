"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var Container = /** @class */ (function () {
    function Container(shapes) {
        this.shapes = shapes;
    }
    Container.prototype.square = function () {
        return this.shapes.reduce(function (res, cur) { return res + cur.square(); }, 0);
    };
    Container.prototype.perimeter = function () {
        return this.shapes.reduce(function (res, cur) { return res + cur.perimeter(); }, 0);
    };
    return Container;
}());
exports.Container = Container;
//# sourceMappingURL=Container.js.map