import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  @Input() note : any;
  @Output() onClose = new EventEmitter<boolean>();

  constructor(private noteService : NotesService) { }

  ngOnInit(): void {
    console.log(this.note)
  }

  onDelete(){
    this.noteService.deleteNote(this.note.id)
    this.onClose.emit(true)
  }

  onEdit(){
    this.noteService.editNote(this.note.id, this.note.body)
    this.onClose.emit(true)
  }

}
