import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './events/home/home.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "auth", loadChildren : () => import("./auth/auth.module").then(a => a.AuthModule)},
  {path : "event", loadChildren : () => import("./events//components/event.module").then(a => a.EventModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
