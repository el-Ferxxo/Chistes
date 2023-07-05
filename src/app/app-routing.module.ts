import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChisteComponent } from './chiste/chiste.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path:"chiste" ,component:ChisteComponent},
  {path:"info" ,component:InfoComponent},
  {path:"",component:ChisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
