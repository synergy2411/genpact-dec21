import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  noteCollection = [];
  showEditNote: boolean = false;
  selectedNote : any;
  constructor(private noteService : NotesService) { }

  ngOnInit(): void {
    this.noteCollection = this.noteService.getNotes()
  }

  onSelectedNote(note){
    this.showEditNote = true;
    this.selectedNote = note;
  }

}
