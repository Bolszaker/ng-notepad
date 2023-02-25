import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../savednotes/notes.service';
import { Notes } from './notes.model';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css'],
})
export class NotepadComponent {
  @ViewChild('n', { static: false }) nForm: NgForm;
  remainingValue = '';
  notesSaved = false;

  constructor(private notesService: NotesService, private router: Router) {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const newNotes = new Notes(value.title, value.content);
    this.notesService.saveNotes(newNotes);
    this.notesSaved = true;
    form.resetForm();
    setTimeout(() => {
      this.notesSaved = false;
    }, 3000);
  }

  onClose() {
    this.notesSaved = false;
  }
}
