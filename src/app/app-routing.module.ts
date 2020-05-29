import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-deux',
    loadChildren: () => import('./register-deux/register-deux.module').then( m => m.RegisterDeuxPageModule)
  },
  {
    path: 'register-trois',
    loadChildren: () => import('./register-trois/register-trois.module').then( m => m.RegisterTroisPageModule)
  },
  {
    path: 'register-quatre',
    loadChildren: () => import('./register-quatre/register-quatre.module').then( m => m.RegisterQuatrePageModule)
  },
  {
    path: 'register-cinq',
    loadChildren: () => import('./register-cinq/register-cinq.module').then( m => m.RegisterCinqPageModule)
  },
  {
    path: 'vestes-chic',
    loadChildren: () => import('./vestes-chic/vestes-chic.module').then( m => m.VestesChicPageModule)
  },
  {
    path: 'veste-chic-produit',
    loadChildren: () => import('./veste-chic-produit/veste-chic-produit.module').then( m => m.VesteChicProduitPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'paiement',
    loadChildren: () => import('./paiement/paiement.module').then( m => m.PaiementPageModule)
  },
  {
    path: 'paiement-valide',
    loadChildren: () => import('./paiement-valide/paiement-valide.module').then( m => m.PaiementValidePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'pantalons-chic',
    loadChildren: () => import('./pantalons-chic/pantalons-chic.module').then( m => m.PantalonsChicPageModule)
  },
  {
    path: 'chemises-chic',
    loadChildren: () => import('./chemises-chic/chemises-chic.module').then( m => m.ChemisesChicPageModule)
  },
  {
    path: 'inscription-success',
    loadChildren: () => import('./inscription-success/inscription-success.module').then( m => m.InscriptionSuccessPageModule)
  },
  {
    path: 'produit-ajout-note',
    loadChildren: () => import('./produit-ajout-note/produit-ajout-note.module').then( m => m.ProduitAjoutNotePageModule)
  },
  {
    path: 'produit-view-note',
    loadChildren: () => import('./produit-view-note/produit-view-note.module').then( m => m.ProduitViewNotePageModule)
  },  {
    path: 'regie-p-home',
    loadChildren: () => import('./regie-p-home/regie-p-home.module').then( m => m.RegiePHomePageModule)
  },
  {
    path: 'regie-p-login',
    loadChildren: () => import('./regie-p-login/regie-p-login.module').then( m => m.RegiePLoginPageModule)
  },
  {
    path: 'regie-p-register',
    loadChildren: () => import('./regie-p-register/regie-p-register.module').then( m => m.RegiePRegisterPageModule)
  },
  {
    path: 'regi-p-accueil',
    loadChildren: () => import('./regi-p-accueil/regi-p-accueil.module').then( m => m.RegiPAccueilPageModule)
  },
  {
    path: 'regie-p-registerdeux',
    loadChildren: () => import('./regie-p-registerdeux/regie-p-registerdeux.module').then( m => m.RegiePRegisterdeuxPageModule)
  },
  {
    path: 'regie-p-registertrois',
    loadChildren: () => import('./regie-p-registertrois/regie-p-registertrois.module').then( m => m.RegiePRegistertroisPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
