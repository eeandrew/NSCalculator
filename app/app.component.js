"use strict";
var core_1 = require("@angular/core");
var displayer_component_1 = require('./Displayer/displayer.component');
var keyboard_component_1 = require('./Keyboard/keyboard.component');
var nsbutton_component_1 = require('./NSButton/nsbutton.component');
var AppComponent = (function () {
    function AppComponent() {
        this.counter = '';
    }
    AppComponent.prototype.onKeyBoardClicked = function (text) {
        switch (text.toLowerCase()) {
            case 'c':
                this.counter = '';
                break;
            default:
                this.counter += text;
                break;
        }
        console.log(this.counter);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onKeyBoardClicked = this.onKeyBoardClicked.bind(this);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <GridLayout rows=\"auto,*\" columns=\"*\">\n      <displayer [input]=\"counter\" row=\"0\"></displayer>\n      <keyboard row=\"1\" [onKeyBoardClicked]=\"onKeyBoardClicked\"></keyboard>  \n    </GridLayout>\n",
            directives: [displayer_component_1.Displayer, keyboard_component_1.Keyboard, nsbutton_component_1.NSButton]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map