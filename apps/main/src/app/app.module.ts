import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from '@owls/navbar';
import { SidebarModule } from '@owls/sidebar';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),

    AppRoutingModule,
    NavbarModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
