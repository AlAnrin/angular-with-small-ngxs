import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxsModule} from "@ngxs/store";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PageNotFoundComponent} from "./page-not-found.component";
import {RootState} from "./root-state";
import { PlantsComponent } from './plants/plants.component';
import { RootComponent } from './root/root.component';
import {MaterialModule} from "./material.module";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PlantsComponent,
    RootComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    NgxsModule.forRoot([RootState]),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    PageNotFoundComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
