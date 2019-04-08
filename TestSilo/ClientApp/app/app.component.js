var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Silo } from './silo';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.silo = new Silo();
        this.tableMode = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadSilos();
        console.log(this.silos);
    };
    AppComponent.prototype.loadSilos = function () {
        var _this = this;
        this.dataService.getSilos()
            .subscribe(function (data) { return _this.silos = data; });
    };
    AppComponent.prototype.save = function () {
        var _this = this;
        console.log(this.silos);
        if (this.silo.id == null) {
            this.dataService.createSilos(this.silo)
                .subscribe(function (data) { return _this.silos.push(data); });
        }
        else {
            this.dataService.updateSilos(this.silo)
                .subscribe(function (data) { return _this.loadSilos(); });
        }
        this.cancel();
    };
    AppComponent.prototype.editSilo = function (p) {
        this.silo = p;
    };
    AppComponent.prototype.cancel = function () {
        this.silo = new Silo();
        this.tableMode = true;
    };
    AppComponent.prototype.delete = function (p) {
        var _this = this;
        this.dataService.deleteSilos(p.id)
            .subscribe(function (data) { return _this.loadSilos(); });
    };
    AppComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map