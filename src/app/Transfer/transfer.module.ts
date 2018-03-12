import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SameAccountTransferComponent } from './same-account-transfer/same-account-transfer.component';
import { TransferRoutingModule } from './transfer.routing';


@NgModule({

    
    declarations:[SameAccountTransferComponent],
    imports:[BrowserModule,TransferRoutingModule]
    
})

export class TransferModule{

}
