import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntlComponent } from './intl/intl.component';
import { NigComponent } from './nig/nig.component';

const routes: Routes = [
  { path: '', redirectTo: '/nig', pathMatch: 'full' },
  { path: 'intl', component: IntlComponent },
  { path: 'nig', component: NigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
