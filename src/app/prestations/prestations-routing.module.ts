import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { PrestationResolverService } from './services/prestation-resolver.service';

const appRoutes: Routes = [
  { path: '', component: ListPrestationsComponent },
  { path: 'add', component: AddPrestationComponent },
  { path: 'edit/:id', component: EditPrestationComponent, resolve: {prestation: PrestationResolverService} },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
