import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotationsRoutingModule } from './votations-routing.module';
import { VotationListComponent } from './votation-list/votation-list.component';
import { VotationCreateComponent } from './votation-create/votation-create.component';
import { VotationComponent } from './votation/votation.component';
import { VotationSearchComponent } from './votation-search/votation-search.component';


@NgModule({
  declarations: [VotationListComponent, VotationCreateComponent, VotationComponent, VotationSearchComponent],
  imports: [
    CommonModule,
    VotationsRoutingModule,
    FormsModule
  ]
})
export class VotationsModule { }
