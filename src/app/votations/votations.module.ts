import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotationsRoutingModule } from './votations-routing.module';
import { VotationListComponent } from './votation-list/votation-list.component';
import { VotationCreateComponent } from './votation-create/votation-create.component';


@NgModule({
  declarations: [VotationListComponent, VotationCreateComponent],
  imports: [
    CommonModule,
    VotationsRoutingModule
  ]
})
export class VotationsModule { }
