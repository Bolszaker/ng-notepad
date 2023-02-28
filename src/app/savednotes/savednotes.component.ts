import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NotesService } from './notes.service';
import { Notes } from '../notepad/notes.model';

@Component({
  selector: 'app-savednotes',
  templateUrl: './savednotes.component.html',
  styleUrls: ['./savednotes.component.css'],
})
export class SavednotesComponent implements OnInit, OnDestroy {
  notes: Notes[] = [];
  notesSub: Subscription;

  constructor(private notesService: NotesService, private router: Router) {}

  ngOnInit(): void {
    this.notesSub = this.notesService.notesChanged.subscribe(
      (notes: Notes[]) => {
        this.notes = notes;
      }
    );
    this.notes = this.notesService.getNotes();
  }

  ngOnDestroy(): void {
    this.notesSub.unsubscribe();
  }
}
