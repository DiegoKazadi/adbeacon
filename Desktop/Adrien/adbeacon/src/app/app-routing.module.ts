import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'visitar', loadChildren: './visitar/visitar.module#VisitarPageModule' },
  { path: 'obra', loadChildren: './obra/obra.module#ObraPageModule' },
  { path: 'entrar', loadChildren: './entrar/entrar.module#EntrarPageModule' },
  { path: 'administrativo', loadChildren: './administrativo/administrativo.module#AdministrativoPageModule' },
  { path: 'obra2', loadChildren: './obra2/obra2.module#Obra2PageModule' },
  { path: 'cadastrar', loadChildren: './cadastrar/cadastrar.module#CadastrarPageModule' },
  { path: 'escolha-beacon', loadChildren: './escolha-beacon/escolha-beacon.module#EscolhaBeaconPageModule' },
  { path: 'cadastrar-obras', loadChildren: './cadastrar-obras/cadastrar-obras.module#CadastrarObrasPageModule' },
  { path: 'confirmar-cadastramento', loadChildren: './confirmar-cadastramento/confirmar-cadastramento.module#ConfirmarCadastramentoPageModule' },
  { path: 'obras-cadastradas', loadChildren: './obras-cadastradas/obras-cadastradas.module#ObrasCadastradasPageModule' },
  { path: 'agradecimento', loadChildren: './agradecimento/agradecimento.module#AgradecimentoPageModule' },
  { path: 'bem-vindo', loadChildren: './bem-vindo/bem-vindo.module#BemVindoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
