"use strict";
var core_1 = require("@angular/core");
var displayer_component_1 = require('./Displayer/displayer.component');
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter += 100;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <GridLayout rows=\"auto,*\" columns=\"*\">\n      <displayer [input]=\"counter\" row=\"0\"></displayer> \n      <Button text=\"TAP\" (tap)=\"onTap()\" row=\"1\"></Button>\n    </GridLayout>\n",
            directives: [displayer_component_1.Displayer]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map