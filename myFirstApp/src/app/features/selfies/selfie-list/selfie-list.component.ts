import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Selfie } from 'src/app/model/selfie';
import { SelfieService } from 'src/app/shared/services/selfies/selfie.service';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit, OnDestroy {

  @Input()
  set filtre(valeur:string){
    console.log('SelfieListComponent', valeur);
  }

  lesSubs:Subscription[] = [];

  listSelfie!:Selfie[];

  public selfieAAjouter!:Selfie;

  constructor(private selfieService:SelfieService) { }

  ngOnDestroy(): void {
    this.lesSubs.forEach(item => item.unsubscribe)
  }

  ngOnInit(): void {
      const currentSubscription = this.selfieService.getAllAsObservable().subscribe(selfies => {
        this.listSelfie = selfies;
      })
      this.lesSubs.push(currentSubscription);
  }

  demandeAjout() : void { 
    this.selfieAAjouter = new Selfie();
  }
}
