import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Notes } from '../notepad/notes.model';

@Injectable({ providedIn: 'root' })
export class NotesService {
  notesChanged = new Subject<Notes[]>();

  private notes: Notes[] = [
    new Notes('Test note 1', 'This is just a test note'),
    new Notes(
      'Another test',
      'This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another testThis is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test This is just another test '
    ),
  ];

  setNotes(notes: Notes[]) {
    this.notes = notes;
    this.notesChanged.next(this.notes.slice());
  }

  getNotes() {
    return this.notes.slice();
  }

  loadNotes(index: number) {
    return this.notes[index];
  }

  saveNotes(notes: Notes) {
    this.notes.push(notes);
    this.notesChanged.next(this.notes.slice());
  }

  deleteNotes(index: number) {
    this.notes.splice(index, 1);
    this.notesChanged.next(this.notes.slice());
  }
}
