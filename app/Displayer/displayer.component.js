"use strict";
var core_1 = require('@angular/core');
var platform_1 = require('platform');
var Displayer = (function () {
    function Displayer() {
        this.currentFont = Displayer.MAX_FONT;
    }
    Displayer.prototype.ngAfterViewInit = function () {
        this.displayer = this.displayerRef.nativeElement;
        this.wrapper = this.wrapperRef.nativeElement;
        this.setIOSLabelAutoFont(this.displayer);
    };
    Displayer.prototype.ngOnChanges = function (changes) {
        //Android Only
        if (platform_1.device.os !== platform_1.platformNames.android)
            return;
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            console.log('current ' + cur + ' previous ' + prev);
            if (this.displayer && this.wrapper) {
                var paint = this.displayer.android.getPaint();
                var textWidth = paint.measureText(cur);
                var wrapperWidth = this.wrapper.android.getWidth();
                if (Math.abs(wrapperWidth - textWidth) < 50 && this.currentFont > Displayer.MIN_FONT) {
                    this.currentFont -= 10;
                }
                if (Math.abs(wrapperWidth - textWidth) > wrapperWidth / 2) {
                    this.currentFont = Displayer.MAX_FONT;
                }
                this.displayer.android.setTextSize(this.currentFont);
            }
        }
    };
    Displayer.prototype.setIOSLabelAutoFont = function (elem) {
        if (platform_1.device.os === platform_1.platformNames.ios) {
            elem.ios.numberOfLines = 1;
            elem.ios.minimumFontSize = Displayer.MIN_FONT;
            elem.ios.adjustsFontSizeToFitWidth = true;
        }
    };
    Displayer.MAX_FONT = 60;
    Displayer.MIN_FONT = 20;
    __decorate([
        core_1.Input('input'), 
        __metadata('design:type', String)
    ], Displayer.prototype, "input", void 0);
    __decorate([
        core_1.ViewChild('displayer'), 
        __metadata('design:type', core_1.ElementRef)
    ], Displayer.prototype, "displayerRef", void 0);
    __decorate([
        core_1.ViewChild('wrapper'), 
        __metadata('design:type', core_1.ElementRef)
    ], Displayer.prototype, "wrapperRef", void 0);
    Displayer = __decorate([
        core_1.Component({
            selector: 'displayer',
            template: "\n    <StackLayout class=\"stacklayout\" row=\"0\" #wrapper>\n      <Label #displayer class=\"displayer large\" [text]=\"input\"></Label>\n    </StackLayout>\n  ",
            styleUrls: ['Displayer/displayer.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Displayer);
    return Displayer;
}());
exports.Displayer = Displayer;
//# sourceMappingURL=displayer.component.js.map