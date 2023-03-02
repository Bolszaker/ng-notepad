import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Notes } from 'src/app/notepad/notes.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-savednotes-edit',
  templateUrl: './savednotes-edit.component.html',
  styleUrls: ['./savednotes-edit.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class SavednotesEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  notes: Notes;
  id: number;
  remainingValue = '';

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService,
    private router: Router,
    private modalService: NgbModal,
    private config: NgbModalConfig
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.notes = this.notesService.loadNotes(this.id);
    });
  }

  onSubmit(form: NgForm) {
    // this.details.editSuccess = true;
    const value = form.value;
    const updatedNotes = new Notes(value.title, value.content);
    this.notesService.updateNotes(this.id, updatedNotes);
    this.router.navigate(['/saved/' + this.id]);
    this.modalService.dismissAll();
  }

  reallyUpdate(content: any) {
    this.modalService.open(content);
  }

  onCancel() {
    this.editForm.reset();
    this.router.navigate(['/saved/' + this.id]);
  }
}
