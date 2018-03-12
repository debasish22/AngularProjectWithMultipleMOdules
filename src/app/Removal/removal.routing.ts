import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SameAccountRemovalComponent } from './same-account-removal/same-account-removal.component';

const routes:Routes=[
    { path: 'Removal', component: SameAccountRemovalComponent }
]

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]

})
export class RemovalRoutingModule{}