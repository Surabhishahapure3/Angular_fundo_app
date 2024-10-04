import { Component, OnInit,EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Output() closeNote = new EventEmitter<void>();

  close() {
    this.closeNote.emit();
  }
}
