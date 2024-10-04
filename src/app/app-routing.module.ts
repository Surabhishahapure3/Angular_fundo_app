import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardContainerComponent } from './components/dashboard-containeer/dashboard-container.component'
import { NotesComponent} from './components/notes/notes.component'
import { ArchieveContainerComponent } from './components/archieve/archieve.component'
import { TrashContainerComponent } from './components/trash-container/trash-container.component'

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
    component:DashboardContainerComponent,
  children: [
    {
      path:"notes",
      component:NotesComponent
    },
    {
      path:"archive",
      component:ArchieveContainerComponent
    },
    {
      path:"trash",
      component:TrashContainerComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
