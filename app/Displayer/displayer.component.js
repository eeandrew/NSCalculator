"use strict";
var core_1 = require('@angular/core');
var Displayer = (function () {
    function Displayer() {
    }
    __decorate([
        core_1.Input('input'), 
        __metadata('design:type', Number)
    ], Displayer.prototype, "input", void 0);
    Displayer = __decorate([
        core_1.Component({
            selector: 'displayer',
            template: "\n    <StackLayout class=\"stacklayout\">\n      <Label class=\"displayer large\" [text]=\"input\"></Label>\n    </StackLayout>\n  ",
            styleUrls: ['Displayer/displayer.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Displayer);
    return Displayer;
}());
exports.Displayer = Displayer;
//# sourceMappingURL=displayer.component.js.map