import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NotesService } from 'src/services/note-service/notes.service';
import { REMINDER_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, ARCHIVE_ICON, MORE_ICON, DELETE_FOREVER_ICON, RESTORE_ICON, UNARCHIVE_ICON, IMG_ICON,SEARCH_ICON } from '../../../assets/svg-icons';  // Adjust based on component location



@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit{
  @Input() noteDetails: any = {};
  @Output() archiveNote = new EventEmitter<string>();
  @Output() deleteNote: EventEmitter<any> = new EventEmitter();
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private notesService:NotesService) {
    iconRegistry.addSvgIconLiteral('reminder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('search-icon', sanitizer.bypassSecurityTrustHtml(SEARCH_ICON));
    iconRegistry.addSvgIconLiteral('collabrator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('color-palatte-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON));
    iconRegistry.addSvgIconLiteral('delete-forever-icon', sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON));
    iconRegistry.addSvgIconLiteral('restore-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON));
    iconRegistry.addSvgIconLiteral('unarchive-icon', sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON));
  }

  ngOnInit():void{

  }

  onArchiveClick(){
    this.archiveNote.emit(this.noteDetails._id);
    console.log(this.noteDetails._id);
  }

  onDeleteClick(){
    this.deleteNote.emit(this.noteDetails._id)
  }
}
