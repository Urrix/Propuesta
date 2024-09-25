import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProposalComponent } from './proposal/proposal.component';
import { CollageComponent } from './collage/collage.component'; // Asegúrate de crear este componente
import { DiaryComponent } from './diary/diary.component'; // Asegúrate de crear este componente
import { CongratsComponent } from './congrats/congrats.component';
import { CrucigramaComponent } from './crucigrama/crucigrama.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'proposals', component: ProposalComponent },
  { path: 'collage', component: CollageComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'congrats', component: CongratsComponent },
  { path: 'crucigrama', component: CrucigramaComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: '', redirectTo: '/diary', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
