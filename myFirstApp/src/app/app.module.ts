import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { SelfieListComponent } from './features/selfies/selfie-list/selfie-list.component';
import { UnSelfieReadonlyComponent } from './features/selfies/un-selfie-readonly/un-selfie-readonly.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSelfieComponent } from './features/selfies/add-selfie/add-selfie.component'
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    SelfieListComponent,
    UnSelfieReadonlyComponent,
    AddSelfieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
