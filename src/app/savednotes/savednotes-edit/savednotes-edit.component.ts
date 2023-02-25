import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Notes } from 'src/app/notepad/notes.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-savednotes-edit',
  templateUrl: './savednotes-edit.component.html',
  styleUrls: ['./savednotes-edit.component.css'],
})
export class SavednotesEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  notes: Notes;
  id: number;
  remainingValue = '';

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

  onSubmit(form: NgForm) {}

  onCancel() {
    this.editForm.reset();
    this.router.navigate(['/saved']);
  }
}
