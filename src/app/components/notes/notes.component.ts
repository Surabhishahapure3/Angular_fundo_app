import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/services/note-service/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notesList: any[] = [];

  constructor(private noteService: NotesService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');
    console.log('JWT from local storage:', token);
    this.fetchNotes();
  }

  fetchNotes(): void {
    this.noteService.getNotesApiCall('router/all').subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.notesList = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  handleUpdateNotesList($event: { action: string; data: any }) {
    console.log($event);
    this.notesList = [$event.data, ...this.notesList];
  }

  // Method to handle the archived note
  onArchiveNote(noteId: string) {
    console.log(noteId);
    this.noteService.archiveNoteById('router', noteId).subscribe({
      next: () => {
        console.log('Note archived successfully');
        this.notesList = this.notesList.filter(note => note._id !== noteId);
      
      console.log('Updated notes list:', this.notesList);
      },
      error: (err) => {
        console.log('Error archiving note:', err);
      }
    });
  }

  onDeleteNote(noteId: string) {
    this.noteService.deleteNoteById('router/delete', noteId).subscribe({
      next: () => {
        console.log('Note deleted successfully');
        this.notesList = this.notesList.filter(note => note.id !== noteId);  
      },
      error: (err) => {
        console.log('Error deleting note:', err);
      }
    });
  }
}
