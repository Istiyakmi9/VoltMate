import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MapComponent } from './map/map.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'mobileapp', component: MobileappComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'map', component: MapComponent},
  {path: 'contactus', component: ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
