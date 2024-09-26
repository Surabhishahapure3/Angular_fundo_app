import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardContaineerComponent } from './components/dashboard-containeer/dashboard-containeer.component'
import { NotesComponent} from './components/notes/notes.component'
import { ArchieveComponent } from './components/archieve/archieve.component'
import { TrashComponent } from './components/trash/trash.component'

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path:'', 
    component:DashboardContaineerComponent,
  children: [
    {
      path:"notes",
      component:NotesComponent
    },
    {
      path:"archive",
      component:ArchieveComponent
    },
    {
      path:"trash",
      component:TrashComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
