import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note : any;
  @Output() onNoteItemSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onNoteSelected(){
    this.onNoteItemSelected.emit(this.note);
  }

}
