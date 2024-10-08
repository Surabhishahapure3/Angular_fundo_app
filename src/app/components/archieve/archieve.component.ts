import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/services/note-service/notes.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/services/data-service/data.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveContainerComponent implements OnInit {
  notesList: any[] = [];
  searchQuery: string = '';
  subscription!: Subscription;
  
  
  constructor(private noteService: NotesService, private dataService:DataService) { }

  ngOnInit(): void {
    this.fetchArchivedNotes();
    this.dataService.curSearchQuery.subscribe({
      next: (data) => {
        this.searchQuery = data;
      },
    });
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
    console.log($event);
    if ($event.action === 'unarchive') {
      this.notesList = this.notesList.filter(note => note._id !== $event.data._id);
    }
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  
}
