import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
import { PoketeamComponent } from './poketeam/poketeam.component';
import { RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PoketeamComponent,
    FrontPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    BrowserAnimationsModule,
    RouterModule,
    ProgressSpinnerModule,
  ],
  providers: [ApiService, MainPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
