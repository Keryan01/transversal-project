import { ResultComponent } from './result/result.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SearchVoteComponent } from './search-vote/search-vote.component';
import { DisplayVoteComponent } from './display-vote/display-vote.component';
import { SelectedVoteComponent } from './selected-vote/selected-vote.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'displayvote', component: DisplayVoteComponent },
    { path: 'result', component: ResultComponent },
    { path: 'searchVote', component: SearchVoteComponent },
    { path: 'selectedVote/:id', component: SelectedVoteComponent },
    { path: 'votations', loadChildren: () => import('./votations/votations.module').then(m => m.VotationsModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
