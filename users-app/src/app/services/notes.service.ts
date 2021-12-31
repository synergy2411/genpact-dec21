import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes = [
    { id: 1, title: 'grocery', body: 'buy the pulses' },
    { id: 2, title: 'shopping', body: 'buy the jeans' },
    { id: 3, title: 'insurance', body: 'renew car insurance' },
    { id: 4, title: 'planting', body: 'pot the plants' },
  ];

  getNotes() {
    return this.notes;
  }

  deleteNote(id){
    const position = this.notes.findIndex(note => note.id === id)
    this.notes.splice(position , 1)
  }

  editNote(id, body){
    const position = this.notes.findIndex(note => note.id === id)
    this.notes[position].body = body;
  }

  constructor() {}
}
