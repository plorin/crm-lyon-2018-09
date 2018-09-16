import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrestationsRoutingModule } from './prestations-routing.module';

import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { SharedModule } from '../shared/shared.module';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { FormComponent } from './components/form/form.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { TemplatesModule } from '../templates/templates.module';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TemplatesModule
  ],
  declarations: [ListPrestationsComponent, PrestationComponent, AddPrestationComponent, FormComponent, FormReactiveComponent, EditPrestationComponent]
})
export class PrestationsModule { }
