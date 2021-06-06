import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { ProjectsComponent } from './components/projects/projects.component';




const routes: Routes = [
  { path: '', component: MaincontentComponent },
  { path: 'project', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
