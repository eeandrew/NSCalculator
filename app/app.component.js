"use strict";
var core_1 = require("@angular/core");
var keyboard_component_1 = require('./Keyboard/keyboard.component');
var displayer_component_1 = require('./Displayer/displayer.component');
var AppComponent = (function () {
    function AppComponent() {
        this.counter = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.onKeyBoardClicked = this.onKeyBoardClicked.bind(this);
    };
    AppComponent.prototype.onKeyBoardClicked = function (text) {
        switch (text.toUpperCase()) {
            case 'C':
                this.counter = '';
                break;
            default:
                this.counter += text;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "calculator",
            template: "\n\t\t\t<GridLayout rows=\"auto,*\" columns=\"*\">\n\t\t\t<!--Displayer-->\n\t\t\t<displayer [input]=\"counter\" row=\"0\"></displayer>\n\t\t\t<!--Keyboard-->\n\t\t\t<keyboard row=\"1\" [onKeyBoardClicked]=\"onKeyBoardClicked\"></keyboard>\n\t\t\t</GridLayout>\n\t",
            directives: [keyboard_component_1.Keyboard, displayer_component_1.Displayer]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map