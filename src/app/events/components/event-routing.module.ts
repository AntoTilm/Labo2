import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyeventComponent } from './myevent/myevent.component';

const routes: Routes = [
  { path: 'myEvent', component: MyeventComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
