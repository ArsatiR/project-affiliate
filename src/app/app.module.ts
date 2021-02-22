import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageModule } from './homepage/homepage.module';
import { SharedModule } from './core/modules/shared.module';
import { RegisterPageModule } from './core/components/registerPage/registerPage.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomepageModule,
    RegisterPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
