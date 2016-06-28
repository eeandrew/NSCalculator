"use strict";
var core_1 = require('@angular/core');
var nsbutton_component_1 = require('../NSButton/nsbutton.component');
var Keyboard = (function () {
    function Keyboard() {
    }
    Keyboard.prototype.onBtnClicked = function (text) {
        this.onKeyBoardClicked && this.onKeyBoardClicked.call(this, text);
    };
    Keyboard.prototype.ngOnInit = function () {
        this.onBtnClicked = this.onBtnClicked.bind(this);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], Keyboard.prototype, "onKeyBoardClicked", void 0);
    Keyboard = __decorate([
        core_1.Component({
            selector: 'keyboard',
            templateUrl: 'Keyboard/keyboard.html',
            styleUrls: ['Keyboard/keyboard.css'],
            directives: [nsbutton_component_1.NSButton]
        }), 
        __metadata('design:paramtypes', [])
    ], Keyboard);
    return Keyboard;
}());
exports.Keyboard = Keyboard;
//# sourceMappingURL=keyboard.component.js.map