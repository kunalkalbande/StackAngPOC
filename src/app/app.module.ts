import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from '@angular/material/dialog';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component'

@NgModule({
  declarations: [
    HomeComponent,
    StudentDetailComponent,
    AppComponent,
    LayoutComponent,
    ConfirmationComponent,
    CreateComponent,
    HeaderComponent,
    SidenavListComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatDialogModule,
    RoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
