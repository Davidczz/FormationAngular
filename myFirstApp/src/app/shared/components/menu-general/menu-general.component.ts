import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {

  @ViewChild('zoneRecherche', { static: false})
  maZoneDeRecherche!:ElementRef;

  @Output()
  lancerRecherche: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  rechercher() {
    const valeurRecherchee = this.maZoneDeRecherche.nativeElement.value;
    this.lancerRecherche.emit(valeurRecherchee);
  }

}
