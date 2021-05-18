import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  // {
  //   path: 'name', component: NameComponent
  //   children: [
  //     { path: '', component: NameComponent },
  //     { path: ':path', component: NameComponent },
  //     { path: ':path/:params', component: NameComponent }
  //   ],
  //   canActivate: [AuthenguardGuard]
  // },
  { path: '', component: IndexComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
