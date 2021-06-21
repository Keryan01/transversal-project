import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVoteComponent } from './add-vote/add-vote.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DisplayVoteComponent } from './display-vote/display-vote.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ResultComponent } from './result/result.component';
import { SearchVoteComponent } from './search-vote/search-vote.component';
import { SelectedVoteComponent } from './selected-vote/selected-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVoteComponent,
    DisplayVoteComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ResultComponent,
    SearchVoteComponent,
    SelectedVoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
