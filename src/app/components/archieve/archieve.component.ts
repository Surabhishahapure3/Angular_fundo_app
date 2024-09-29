import { Component,OnInit } from '@angular/core';
import { NotesService } from 'src/services/note-service/notes.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {

  
  archivedNotesList: any[] = [];

  constructor(private noteService:NotesService){}

  ngOnInit(){
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
       
        this.archivedNotesList = res.data.filter((note: { isarchive: any; }) => note.isarchive); 
        this.archivedNotesList.forEach(note => {
          console.log('Archived Note:', note.Title, note.Description);
        });
        console.log('Archived notes:', this.archivedNotesList); 
      },
      error: (err) => {
        console.log('Error fetching notes:', err);
      }
    });
  }
  

  onDeleteArchivedNote(noteId: string) {
    this.noteService.trashNoteById(noteId).subscribe({
      next: () => {
        console.log('Archived note deleted successfully');
        this.archivedNotesList = this.archivedNotesList.filter(note => note._id !== noteId);
      },
      error: (err) => {
        console.log('Error deleting archived note:', err);
      }
    });
  }
  
  unArchivedNote(noteId: string) {
    this.noteService.updateNoteById('router/achive',noteId, { isarchive: false }).subscribe({
      next: () => {
        console.log('Note unarchived successfully');
        console.log("unarchive",this.archivedNotesList)
        this.archivedNotesList = this.archivedNotesList.filter(note => note._id !== noteId);
        console.log(this.archivedNotesList)
      },
      error: (err) => {
        console.log('Error unarchiving note:', err);
      }
    });
  }

}
