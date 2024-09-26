import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LIST_VIEW_ICON,BRUSH_ICON, TICK_ICON,ARCHIVE_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, DELETE_FOREVER_ICON, IMG_ICON, MORE_ICON, REMINDER_ICON, RESTORE_ICON, UNARCHIVE_ICON,UNDO_ICON,REDO_ICON, PIN_ICON} from 'src/assets/svg-icons';
import { NotesService } from 'src/services/note-service/notes.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent {
  title:string = "";
  description:string = "";
  showTakeNote: boolean = true;
  isExpanded: boolean = true;
  @Output() updateList= new EventEmitter();
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private noteService: NotesService) {
    iconRegistry.addSvgIconLiteral('list-view', sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON));
    iconRegistry.addSvgIconLiteral('brush', sanitizer.bypassSecurityTrustHtml(BRUSH_ICON));
    iconRegistry.addSvgIconLiteral('Image', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('tick', sanitizer.bypassSecurityTrustHtml(TICK_ICON));
    iconRegistry.addSvgIconLiteral('undo-icon', sanitizer.bypassSecurityTrustHtml(UNDO_ICON));
    iconRegistry.addSvgIconLiteral('redo-icon', sanitizer.bypassSecurityTrustHtml(REDO_ICON));
    iconRegistry.addSvgIconLiteral('pin-icon', sanitizer.bypassSecurityTrustHtml(PIN_ICON));
  }

  ngOnInit(): void {
  }
  toggleTakeNote(addNote:boolean=false){
    
    if(addNote){
      this.noteService.createNoteApiCall("notes",{Title: this.title, Description:this.description}).subscribe({
        next:(data:any)=>{
          this.updateList.emit({action:"add", data:data?.data})
        },
        error: (err)=>{
          console.log(err);
        }
      });
    }else{
      this.showTakeNote = !this.showTakeNote;
    }
    this.title = ""
    this.description = ""
    console.log(this.title);
    console.log(this.description);
  }
}
