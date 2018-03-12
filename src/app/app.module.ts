import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TransferModule} from "./Transfer/transfer.module";
import {RemovalModule} from "./Removal/removal.module";
import { AppComponent } from './app.component';
import { NotFoundComponent } from './app.notFoundComponent';
import {AppRoutingModule} from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    TransferModule,
    RemovalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
