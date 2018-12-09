import { MatProgressSpinnerModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from '@owls/navbar';
import { SidebarModule } from '@owls/sidebar';
import { TicketsModule } from '@owls/tickets';
import { UploaderModule } from '@owls/uploader';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),

    MatProgressSpinnerModule,

    NavbarModule,
    SidebarModule,
    TicketsModule,
    UploaderModule,

    StoreModule.forRoot({},{ metaReducers : !environment.production ? [storeFreeze] : [] }),

    EffectsModule.forRoot([]),

    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
