import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'
import { AppComponent } from './app.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [ReactiveFormsModule,BrowserModule,AngularFireModule.initializeApp(environment.firebase),AngularFireDatabaseModule,HttpClientModule,AgGridModule.withComponents([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}