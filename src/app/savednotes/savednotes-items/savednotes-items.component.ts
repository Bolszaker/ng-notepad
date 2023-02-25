import { Component, Input } from '@angular/core';

import { Notes } from 'src/app/notepad/notes.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-savednotes-items',
  templateUrl: './savednotes-items.component.html',
  styleUrls: ['./savednotes-items.component.css'],
})
export class SavednotesItemsComponent {
  @Input() notes: Notes;
  @Input() index: number;

  constructor(private notesService: NotesService) {}
}
