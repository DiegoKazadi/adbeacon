import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarObrasPage } from './cadastrar-obras.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarObrasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarObrasPage]
})
export class CadastrarObrasPageModule {}
