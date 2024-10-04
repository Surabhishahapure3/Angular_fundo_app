import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from 'src/services/data-service/data.service';
import { NotesService } from 'src/services/note-service/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notesList: any[] = [];
  searchQuery: string = '';
  subscription!: Subscription;
  

  constructor(private noteService: NotesService,private dataService: DataService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');
    console.log('JWT from local storage:', token);
    this.fetchNotes();
    this.dataService.curSearchQuery.subscribe({
      next: (data) => {
        this.searchQuery = data;
      },
    });
  }

  fetchNotes(): void {
    this.noteService.getNotesApiCall('router/all').subscribe({
      next: (res: any) => {
        this.notesList = res.data.filter(
          (note: any) => !note.isArchive && !note.isTrash
        );
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  handleUpdateNotesList($event: { action: string; data: any }) {
    if ($event.action === 'add') {
      // Add a new note to the list
      this.notesList = [$event.data, ...this.notesList];
    } 
    else if ($event.action === 'archive' || $event.action === 'trash') {
      // Remove archived or trashed notes
      this.notesList = this.notesList.filter(
        (note) => note._id !== $event.data._id
      );
    } 
    else if ($event.action === 'color' || $event.action === 'edit') {
      this.notesList = this.notesList.map(
        (note) => {
          if(note._id === $event.data._id){
            return $event.data;
          }
          return note;
        }
      );
    }
  }

  

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}