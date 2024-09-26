import { Component,OnInit } from '@angular/core';
import { NotesService } from 'src/services/note-service/notes.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {

  archivedNotes :any[] = [];

  constructor(private noteService:NotesService){}

  ngOnInit(){
    this.fetchArchieves();
  }

  fetchArchieves(){
    this.noteService.getNotesApiCall('router/achive').subscribe((response:any)=>{
      this.archivedNotes = response;
    })
  }

  restoreNote(noteId: string) {
    this.noteService.archiveNoteById('router/achive', noteId)
      .subscribe(
        response => {
          console.log('Note restored successfully:', response);
          this.fetchArchieves(); 
        },
        error => {
          console.error('Error restoring note:', error);
        }
      );
  }

}
