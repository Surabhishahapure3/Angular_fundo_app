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
// import { DashboardContaineerComponent } from './components/dashboard-containeer/dashboard-containeer.component';
import { NotesComponent } from './components/notes/notes.component';
import { DashboardContaineerComponent } from './components/dashboard-containeer/dashboard-containeer.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { TrashComponent } from './components/trash/trash.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { NewNoteComponent } from './components/new-note/new-note.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoteCardComponent,
    HeaderComponent,
    NotesComponent,
    DashboardContaineerComponent,
    ArchieveComponent,
    TrashComponent,
    AddnoteComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]   //when it loads which component to be loaded
})
export class AppModule { }
