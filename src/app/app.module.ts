import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav'; 
// import { DashboardContaineerComponent } from './components/dashboard-containeer/dashboard-containeer.component';
import { NotesComponent } from './components/notes/notes.component';
import { DashboardContainerComponent } from './components/dashboard-containeer/dashboard-container.component';
import { ArchieveContainerComponent } from './components/archieve/archieve.component';
import { TrashComponent } from './components/trash/trash.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { MatMenuModule } from '@angular/material/menu';
// import { SearchPipe } from './pipe/search.pipe';

import { MatCardModule } from '@angular/material/card';
import { TrimPipe } from './pipe/trim.pipe';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoteCardComponent,
    HeaderComponent,
    NotesComponent,
    DashboardContainerComponent,
    ArchieveContainerComponent,
    TrashComponent,
    AddnoteComponent,
    NewNoteComponent,
    TrimPipe,
    TrashContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [],   
  bootstrap: [AppComponent] 
})
export class AppModule { }