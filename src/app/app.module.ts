import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module'
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { apitest } from './apitest/apitest';
import { EquipmentComponent } from './apitest/equipment.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './apitest/material-module';

@NgModule({
  declarations: [
    AppComponent
    ,EquipmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [apitest],
  bootstrap: [AppComponent]
})
export class AppModule { }
