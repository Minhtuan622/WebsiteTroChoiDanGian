// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";

// Components
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';


@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class PrivateModule { }
