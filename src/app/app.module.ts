import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ParticlesModule } from 'angular-particle';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatSidenavModule} from '@angular/material';
import {  MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatDividerModule} from '@angular/material/divider';

import { MatBadgeModule } from '@angular/material/badge';

import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';







import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { ProjectsComponent } from './components/projects/projects.component';
import { PopupComponent } from './components/projects/subfiles/popup/popup.component';



@NgModule({
  declarations: [
    AppComponent,
    MaincontentComponent,
    SidenavComponent,
    ProjectsComponent,
    PopupComponent

  ],
  entryComponents: [
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatDialogModule,
    LayoutModule,
    MatListModule,
    MatRippleModule,
    MatTooltipModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
