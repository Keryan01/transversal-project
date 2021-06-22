import { VotationComponent } from './votation/votation.component';
import { VotationCreateComponent } from './votation-create/votation-create.component';
import { VotationListComponent } from './votation-list/votation-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotationSearchComponent } from './votation-search/votation-search.component';

const routes: Routes = [
  { path: '', component: VotationListComponent },
  { path: 'create', component: VotationCreateComponent },
  { path: ':id', component: VotationComponent },
  { path: 'search', component: VotationSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotationsRoutingModule { }
