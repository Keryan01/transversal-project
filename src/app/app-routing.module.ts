import { ResultComponent } from './result/result.component';
import { AddVoteComponent } from './add-vote/add-vote.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SearchVoteComponent } from './search-vote/search-vote.component';
import { DisplayVoteComponent } from './display-vote/display-vote.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'votation', component: AddVoteComponent },
    { path: 'displayvote', component: DisplayVoteComponent },
    { path: 'result', component: ResultComponent },
    { path: 'searchVote', component: SearchVoteComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
