import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmarCadastramentoPage } from './confirmar-cadastramento.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarCadastramentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmarCadastramentoPage]
})
export class ConfirmarCadastramentoPageModule {}
