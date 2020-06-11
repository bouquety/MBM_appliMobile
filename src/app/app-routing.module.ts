import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'password-lost',
    loadChildren: () => import('./password-lost/password-lost.module').then( m => m.PasswordLostPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },  {
    path: 'register2',
    loadChildren: () => import('./register2/register2.module').then( m => m.Register2PageModule)
  },
  {
    path: 'register3',
    loadChildren: () => import('./register3/register3.module').then( m => m.Register3PageModule)
  },
  {
    path: 'accueil-chic',
    loadChildren: () => import('./accueil-chic/accueil-chic.module').then( m => m.AccueilChicPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
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
    path: 'veste-chic-produit',
    loadChildren: () => import('./veste-chic-produit/veste-chic-produit.module').then( m => m.VesteChicProduitPageModule)
  },
  {
    path: 'produit-view-note',
    loadChildren: () => import('./produit-view-note/produit-view-note.module').then( m => m.ProduitViewNotePageModule)
  },
  {
    path: 'produit-ajout-note',
    loadChildren: () => import('./produit-ajout-note/produit-ajout-note.module').then( m => m.ProduitAjoutNotePageModule)
  },
  {
    path: 'vestes-chic',
    loadChildren: () => import('./vestes-chic/vestes-chic.module').then( m => m.VestesChicPageModule)
  },
  {
    path: 'regi-p-accueil',
    loadChildren: () => import('./regi-p-accueil/regi-p-accueil.module').then( m => m.RegiPAccueilPageModule)
  },
  {
    path: 'regie-p-home',
    loadChildren: () => import('./regie-p-home/regie-p-home.module').then( m => m.RegiePHomePageModule)
  },
  {
    path: 'regie-p-login',
    loadChildren: () => import('./regie-p-login/regie-p-login.module').then( m => m.RegiePLoginPageModule)
  },
  {
    path: 'regie-p-sportwear',
    loadChildren: () => import('./regie-p-sportwear/regie-p-sportwear.module').then( m => m.RegiePSportwearPageModule)
  },
  {
    path: 'regie-p-sportwear-modif',
    loadChildren: () => import('./regie-p-sportwear-modif/regie-p-sportwear-modif.module').then( m => m.RegiePSportwearModifPageModule)
  },
  {
    path: 'regie-p-register',
    loadChildren: () => import('./regie-p-register/regie-p-register.module').then( m => m.RegiePRegisterPageModule)
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
