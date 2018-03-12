import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SameAccountRemovalComponent } from './same-account-removal/same-account-removal.component';
import { RemovalRoutingModule } from './removal.routing';

@NgModule({

    declarations:[SameAccountRemovalComponent],
    imports:[BrowserModule,RemovalRoutingModule]
    
})

export class RemovalModule{

}
