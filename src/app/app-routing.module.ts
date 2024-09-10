import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CollageComponent } from './collage/collage.component'; // Asegúrate de crear este componente
import { DiaryComponent } from './diary/diary.component'; // Asegúrate de crear este componente
import { CongratsComponent } from './congrats/congrats.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'collage', component: CollageComponent },
  { path: 'diary', component: DiaryComponent},
  { path: 'congrats', component: CongratsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
