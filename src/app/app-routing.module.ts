import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FlomodoriComponent} from './flomodori/flomodori.component';


const routes: Routes = [
  {path: '', component: FlomodoriComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
