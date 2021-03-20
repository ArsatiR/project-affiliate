import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageModule } from './main/homepage/homepage.module';
import { SharedModule } from './core/modules/shared.module';
import { RegisterPageModule } from './authentication/registerPage/registerPage.module';
import { RootModule } from './core/root/root.module';
import {  RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './main/homepage/homepage.component';
// import { MarketplaceComponent } from './core/root/content/marketplace/marketplace.component';
import { RegisterPageComponent } from './authentication/registerPage/registerPage.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  // {
  //   path: 'marketplace',
  //   component: MarketplaceComponent
  // },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HomepageModule,
    RegisterPageModule,
    RootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
