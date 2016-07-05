"use strict";
var core_1 = require('@angular/core');
var platform_1 = require('platform');
var Displayer = (function () {
    function Displayer() {
    }
    Displayer.prototype.ngAfterViewInit = function () {
        this.displayer = this.displayerRef.nativeElement;
        this.setIOSLabelAutoFont(this.displayer);
    };
    Displayer.prototype.setIOSLabelAutoFont = function (elem) {
        if (platform_1.device.os === platform_1.platformNames.ios) {
            elem.ios.numberOfLines = 1;
            elem.ios.minimumFontSize = 20;
            elem.ios.adjustsFontSizeToFitWidth = true;
        }
    };
    __decorate([
        core_1.Input('input'), 
        __metadata('design:type', String)
    ], Displayer.prototype, "input", void 0);
    __decorate([
        core_1.ViewChild('displayer'), 
        __metadata('design:type', core_1.ElementRef)
    ], Displayer.prototype, "displayerRef", void 0);
    Displayer = __decorate([
        core_1.Component({
            selector: 'displayer',
            template: "\n    <StackLayout class=\"stacklayout\" row=\"0\">\n      <Label #displayer class=\"displayer large\" [text]=\"input\"></Label>\n    </StackLayout>\n  ",
            styleUrls: ['Displayer/displayer.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Displayer);
    return Displayer;
}());
exports.Displayer = Displayer;
//# sourceMappingURL=displayer.component.js.map