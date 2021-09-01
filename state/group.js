"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var account_js_1 = require("./account.js");
var person_js_1 = require("./person.js");
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group(id, name, personObj, members) {
        var _this = _super.call(this, id, name, personObj) || this;
        _this.members = members.map(function (personObj) { return (new person_js_1["default"](personObj.id, personObj.name, personObj.pictureUrl)); });
        return _this;
    }
    return Group;
}(account_js_1["default"]));
