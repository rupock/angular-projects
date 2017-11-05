import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PorductListComponent } from './products/porduct-list.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    PorductListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'home',component:WelcomeComponent
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {path:'products', component: PorductListComponent},
      {path:'**',component:PagenotfoundComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
