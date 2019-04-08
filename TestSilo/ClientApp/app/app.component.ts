import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Silo } from './silo';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {
 
    silo: Silo = new Silo();
    silos: Silo[];
    tableMode: boolean = true;
 
    constructor(private dataService: DataService) { }
 
    ngOnInit() {
        this.loadSilos();
    }

    loadSilos() {
        this.dataService.getSilos()
            .subscribe((data: Silo[]) => this.silos = data);
    }

    save() {
        if (this.silo.id == null) {
            this.dataService.createSilos(this.silo)
                .subscribe((data: Silo) => this.silos.push(data));
        } else {
            this.dataService.updateSilos(this.silo)
                .subscribe(data => this.loadSilos());
        }
        this.cancel();
    }
    editSilo(p: Silo) {
        this.silo = p;
    }
    cancel() {
        this.silo = new Silo();
        this.tableMode = true;
    }
    delete(p: Silo) {
        this.dataService.deleteSilos(p.id)
            .subscribe(data => this.loadSilos());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}