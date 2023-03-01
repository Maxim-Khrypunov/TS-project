"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var displayProps_1 = require("./displayProps");
var Square_1 = require("./Square");
var Container_1 = require("./Container");
var rectangle = new Rectangle_1.Rectangle(3, 4);
var square = new Square_1.Square(10);
var container = new Container_1.Container([rectangle, square]);
(0, displayProps_1.displaySquarePerimeter)(container);
//# sourceMappingURL=app.js.map