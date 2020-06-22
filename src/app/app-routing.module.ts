import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FlomodoryComponent} from './flomodori/flomodory.component';


const routes: Routes = [
  {path: '', component: FlomodoryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
