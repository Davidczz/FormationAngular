import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Selfie} from "../../../model/selfie";
import {SelfieService} from "../../../shared/services/selfies/selfie.service";

@Component({
  selector: 'app-add-selfie',
  templateUrl: './add-selfie.component.html',
  styleUrls: ['./add-selfie.component.css']
})
export class AddSelfieComponent implements OnInit {

  @Output()
  addCanceled : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  selfieToAdd:Selfie|null = null;

  constructor(private selfieService:SelfieService) { }

  ngOnInit(): void {
  }

  cancelAdd() {
    this.addCanceled.emit({});
  }

  ajouterClicked() {
    if(this.selfieToAdd != null)
    this.selfieService.ajouter(this.selfieToAdd).subscribe(item => this.selfieToAdd = item);
    // todo : Informer le parent
  }
}
