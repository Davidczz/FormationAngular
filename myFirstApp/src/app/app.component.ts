import { Component } from '@angular/core';
import { Selfie } from './model/selfie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à wookie';
  subtitle = 'My Subtitle';
  afficheLogo = true;
  listSelfie:Selfie[] = [
    { image: '', wookie: { name : 'David', selfies: []} },
    { image: '', wookie: { name : 'Noémie', selfies: []} }
  ]
}
