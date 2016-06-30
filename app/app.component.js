"use strict";
var core_1 = require("@angular/core");
var keyboard_component_1 = require('./Keyboard/keyboard.component');
var AppComponent = (function () {
    function AppComponent() {
        this.counter = '';
    }
    AppComponent.prototype.onKeyBoardClicked = function (text) {
        alert(text);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "calculator",
            template: "\n    <GridLayout rows=\"auto,*\" columns=\"*\">\n     <!--Dispalyer-->\n     <StackLayout row=\"0\" style=\"font-size:60;color:#fff;height:120;background-color:rgba(0,0,0,0.8);text-align:right;vertical-align:bottom;\">\n      <Label text=\"99\" ></Label>\n     </StackLayout>\n     <!--Keyboard-->\n     <keyboard row=\"1\" [onKeyBoardClicked]=\"onKeyBoardClicked\"></keyboard>\n    </GridLayout>\n",
            directives: [keyboard_component_1.Keyboard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map