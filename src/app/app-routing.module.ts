import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindComponent } from './find/find.component';
import { UpdateComponent } from './update/update.component';
import { PoisearchComponent } from './poisearch/poisearch.component';

const routes: Routes = [
  {
      path: 'find',
      component: FindComponent
  },
  {
      path: 'update',
      component: UpdateComponent
  },
  {
      path: 'poisearch',
      component: PoisearchComponent
  },
  {
      path: '',
      redirectTo: '/find',
      pathMatch: 'full'
  }
//   {
//       path: '**',
//       redirectTo: '/find',
//       pathMatch: 'full'
//   }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
