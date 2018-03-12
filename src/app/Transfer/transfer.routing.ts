import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SameAccountTransferComponent } from './same-account-transfer/same-account-transfer.component';

const routes:Routes=[

    { path: '', component: SameAccountTransferComponent }
]

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]

})



export class TransferRoutingModule{
    
}