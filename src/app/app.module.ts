import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CollageComponent } from './collage/collage.component';
import { ProposalComponent } from './proposal/proposal.component';
import { CongratsComponent } from './congrats/congrats.component';
import { PhotosComponent } from './photos/photos.component';
import { DiaryComponent } from './diary/diary.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CrucigramaComponent } from './crucigrama/crucigrama.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'collage', component: CollageComponent },
  { path: 'proposal', component: ProposalComponent },
  { path: 'congrats', component: CongratsComponent },
  
  { path: 'game', component: CrucigramaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CollageComponent,
    ProposalComponent,
    CongratsComponent,
    PhotosComponent,
    DiaryComponent,
    CrucigramaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
