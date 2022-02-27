import { Component } from '@angular/core';
import { LoggerService } from './shared/services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à wookie';
  subtitle = 'My Subtitle';
  afficheLogo = true;
  valeurRecherche = '';

  constructor(private loggerService: LoggerService) {

  }

  rechercherSelfie(valeur: string) {
    this.loggerService.log(valeur)
    this.valeurRecherche = valeur;
  } 

}
