import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObrasCadastradasPage } from './obras-cadastradas.page';

const routes: Routes = [
  {
    path: '',
    component: ObrasCadastradasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ObrasCadastradasPage]
})
export class ObrasCadastradasPageModule {}
