"use strict";
var core_1 = require('@angular/core');
var gestures_1 = require('ui/gestures');
var color_1 = require('color');
var NSButton = (function () {
    function NSButton() {
        this.active = false;
    }
    NSButton.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.active = false;
        this.nsBtnView = this.nsBtnRef.nativeElement;
        //this.nsBtnView.on(GestureTypes.touch,function(){alert('touch start')});
        this.nsBtnView.on(gestures_1.GestureTypes.touch, function (args) {
            console.log(JSON.stringify(args.action));
            _this.onTouchEvent(args.action.toLowerCase());
            console.log(_this.active);
        });
    };
    NSButton.prototype.setActiveClass = function () {
        var classes = {
            active: this.active
        };
        return classes;
    };
    NSButton.prototype.onTouchEvent = function (type) {
        switch (type) {
            case 'down':
            case 'move':
                this.active = true;
                this.nsBtnView.backgroundColor = new color_1.Color(this.activeBg || '#A3A3A3');
                break;
            default:
                this.nsBtnView.backgroundColor = new color_1.Color(this.normalBg || '#D0D0D0');
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
        __metadata('design:type', Object)
    ], NSButton.prototype, "normalBg", void 0);
    __decorate([
        core_1.Input('activeBg'), 
        __metadata('design:type', Object)
    ], NSButton.prototype, "activeBg", void 0);
    NSButton = __decorate([
        core_1.Component({
            selector: 'nsbutton',
            template: "<Label class=\"{{classNames}}\" [ngClass]=\"setActiveClass()\" #nsbutton [text]=\"text\"> </Label>",
        }), 
        __metadata('design:paramtypes', [])
    ], NSButton);
    return NSButton;
}());
exports.NSButton = NSButton;
//# sourceMappingURL=nsbutton.component.js.map