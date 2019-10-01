import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EscolhaBeaconPage } from './escolha-beacon.page';

const routes: Routes = [
  {
    path: '',
    component: EscolhaBeaconPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscolhaBeaconPage]
})
export class EscolhaBeaconPageModule {}
