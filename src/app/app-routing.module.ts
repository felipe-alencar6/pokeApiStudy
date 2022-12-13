import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PoketeamComponent } from './poketeam/poketeam.component';

const routes: Routes = [
  { path: 'mainpage', component: MainPageComponent },
  { path: 'poketeam', component: PoketeamComponent },
  { path: '', component: FrontPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
