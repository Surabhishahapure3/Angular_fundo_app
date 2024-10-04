import { Component } from '@angular/core';
import { NotesService } from 'src/services/note-service/notes.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent {
  notesList: any[] = [];
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.fetchArchivedNotes();
  }

  fetchArchivedNotes(): void {
    this.noteService.getNotesApiCall('router/all').subscribe({
      next: (res: any) => {
        console.log('Response from API:', res.data); 
        
       /*
        if (Array.isArray(res.data) && res.data.length > 0) {
         
          res.data.forEach((note: any) => {
            console.log('Note:', note); 
          });
        } else {
          console.log('No notes found in the response.');
        }
  */
       
        this.notesList = res.data.filter((note: { isarchive: any; }) => note.isarchive); 
        this.notesList.forEach(note => {
          console.log('Archived Note:', note.Title, note.Description);
        });
        console.log('Archived notes:', this.notesList); 
      },
      error: (err) => {
        console.log('Error fetching notes:', err);
      }
    });
  }

  handleUpdateNotesList($event: { action: string, data: any }) {
    if ($event.action === 'restore') {
      this.notesList = this.notesList.filter(note => note._id !== $event.data._id);
    }
    else if($event.action==='deleteForever'){
      this.notesList = this.notesList.filter(note=>note._id !== $event.data._id)
    }
  }
}
