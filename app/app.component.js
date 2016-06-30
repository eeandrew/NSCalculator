"use strict";
var core_1 = require("@angular/core");
var keyboard_component_1 = require('./Keyboard/keyboard.component');
var platform_1 = require('platform');
var AppComponent = (function () {
    function AppComponent() {
        this.counter = '';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.displayerView = this.displayerRef.nativeElement;
        this.setIOSLabelAutoFont(this.displayerView);
    };
    AppComponent.prototype.setIOSLabelAutoFont = function (elem) {
        if (platform_1.device.os === platform_1.platformNames.ios) {
            elem.ios.numberOfLines = 1;
            elem.ios.minimumFontSize = 20;
            elem.ios.adjustsFontSizeToFitWidth = true;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onKeyBoardClicked = this.onKeyBoardClicked.bind(this);
    };
    AppComponent.prototype.onKeyBoardClicked = function (text) {
        this.counter += text;
    };
    __decorate([
        core_1.ViewChild('displayer'), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "displayerRef", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "calculator",
            template: "\n\t\t\t<GridLayout rows=\"auto,*\" columns=\"*\">\n\t\t\t<!--Dispalyer-->\n\t\t\t<StackLayout row=\"0\" style=\"font-size:60;color:#fff;height:120;background-color:rgba(0,0,0,0.8);text-align:right;vertical-align:bottom;\">\n\t\t\t\t<Label [text]=\"counter\" #displayer></Label>\n\t\t\t</StackLayout>\n\t\t\t<!--Keyboard-->\n\t\t\t<keyboard row=\"1\" [onKeyBoardClicked]=\"onKeyBoardClicked\"></keyboard>\n\t\t\t</GridLayout>\n\t",
            directives: [keyboard_component_1.Keyboard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map