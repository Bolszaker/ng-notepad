import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Notes } from 'src/app/notepad/notes.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-savednotes-details',
  templateUrl: './savednotes-details.component.html',
  styleUrls: ['./savednotes-details.component.css'],
})
export class SavednotesDetailsComponent implements OnInit {
  @Input() notes: Notes;
  @Input() index: number;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.notes = this.notesService.loadNotes(this.id);
    });
  }

  onDelete() {
    this.notesService.deleteNotes(this.id);
    this.router.navigate(['/saved']);
  }
}
