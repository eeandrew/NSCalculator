"use strict";
var core_1 = require('@angular/core');
var color_1 = require('color');
var NSButton = (function () {
    function NSButton() {
        this.active = false;
    }
    NSButton.prototype.ngAfterViewInit = function () {
        this.active = false;
        this.nsBtnView = this.nsBtnRef.nativeElement;
    };
    //TODO: Make sure ngClass doesn't work on Nativescript
    NSButton.prototype.setActiveClass = function () {
        var classes = {
            active: this.active
        };
        return classes;
    };
    NSButton.prototype.changeBg = function (component, bgColor) {
        component.backgroundColor = new color_1.Color(bgColor);
    };
    NSButton.prototype.onKeyUp = function () {
        this.onBtnClicked && this.onBtnClicked.call(this, this.text);
    };
    NSButton.prototype.ngOnInit = function () {
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onTouchEvent = this.onTouchEvent.bind(this);
    };
    NSButton.prototype.onTouch = function (event) {
        this.onTouchEvent(event.action);
    };
    NSButton.prototype.onTouchEvent = function (type) {
        switch (type) {
            case 'down':
            case 'move':
                this.active = true;
                this.changeBg(this.nsBtnView, this.activeBg || 'A3A3A3');
                break;
            case 'up':
                this.onKeyUp();
            default:
                this.changeBg(this.nsBtnView, this.normalBg || 'D0D0D0');
                this.active = false;
                break;
        }
    };
    __decorate([
        core_1.ViewChild('nsbutton'), 
        __metadata('design:type', core_1.ElementRef)
    ], NSButton.prototype, "nsBtnRef", void 0);
    __decorate([
        core_1.Input('text'), 
        __metadata('design:type', String)
    ], NSButton.prototype, "text", void 0);
    __decorate([
        core_1.Input('classNames'), 
        __metadata('design:type', String)
    ], NSButton.prototype, "classNames", void 0);
    __decorate([
        core_1.Input('normalBg'), 
        __metadata('design:type', String)
    ], NSButton.prototype, "normalBg", void 0);
    __decorate([
        core_1.Input('activeBg'), 
        __metadata('design:type', String)
    ], NSButton.prototype, "activeBg", void 0);
    __decorate([
        core_1.Input('onBtnClicked'), 
        __metadata('design:type', Function)
    ], NSButton.prototype, "onBtnClicked", void 0);
    NSButton = __decorate([
        core_1.Component({
            selector: 'nsbutton',
            template: "<Label class=\"{{classNames}}\" [ngClass]=\"setActiveClass()\" #nsbutton [text]=\"text\" (touch)=\"onTouch($event)\"> </Label>",
        }), 
        __metadata('design:paramtypes', [])
    ], NSButton);
    return NSButton;
}());
exports.NSButton = NSButton;
//# sourceMappingURL=nsbutton.component.js.map