"use strict";
var core_1 = require('@angular/core');
var color_1 = require('color');
var NSButton = (function () {
    function NSButton() {
    }
    NSButton.prototype.ngAfterViewInit = function () {
        this.nsBtnView = this.nsBtnRef.nativeElement;
        this.changeBg(this.nsBtnView, this.normalBg || '#D0D0D0');
    };
    NSButton.prototype.changeBg = function (component, bgColor) {
        component.backgroundColor = new color_1.Color(bgColor);
    };
    NSButton.prototype.onTouch = function (event) {
        this.onTouchEvent(event.action);
    };
    NSButton.prototype.onKeyUp = function () {
        if (this.onBtnClicked) {
            this.onBtnClicked && this.onBtnClicked(this.text);
        }
    };
    NSButton.prototype.onTouchEvent = function (type) {
        switch (type) {
            case 'down':
            case 'move':
                this.changeBg(this.nsBtnView, this.activeBg || '#A3A3A3');
                break;
            case 'up':
                this.onKeyUp();
            default:
                this.changeBg(this.nsBtnView, this.normalBg || '#D0D0D0');
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
            template: "<GridLayout class=\"keyboard-item\" #nsbutton (touch)=\"onTouch($event)\"><Label  [text]=\"text\" > </Label><GridLayout>",
            styleUrls: ['NSButton/nsbutton.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NSButton);
    return NSButton;
}());
exports.NSButton = NSButton;
//# sourceMappingURL=nsbutton.component.js.map