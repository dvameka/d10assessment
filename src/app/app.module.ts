import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegformComponent } from './components/regform.component';
import { ConfirmComponent } from './components/confirm.component';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

const ROUTES: Routes = [
  { path: 'regform', component: RegformComponent },
  { path: 'confirm', component: ConfirmComponent },
 { path: '**',
     redirectTo: '/regform',
     pathMatch: 'full'
 },
];

@NgModule({
  declarations: [
    AppComponent,
    RegformComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatRadioModule, FormsModule, MaterialModule, FlexLayoutModule, LayoutModule,
    HttpClientModule, RouterModule.forRoot(ROUTES, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
