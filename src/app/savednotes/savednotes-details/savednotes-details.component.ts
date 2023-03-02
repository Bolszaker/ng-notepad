import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Notes } from 'src/app/notepad/notes.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-savednotes-details',
  templateUrl: './savednotes-details.component.html',
  styleUrls: ['./savednotes-details.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class SavednotesDetailsComponent implements OnInit {
  @Input() notes: Notes;
  @Input() index: number;
  id: number;
  editSuccess: boolean;

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService,
    private router: Router,
    private modalService: NgbModal,
    private config: NgbModalConfig
  ) {
    config.backdrop = true;
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.notes = this.notesService.loadNotes(this.id);
    });
  }

  reallyDelete() {
    this.modalService.dismissAll();
    this.notesService.deleteNotes(this.id);
    this.router.navigate(['/saved']);
  }

  onDelete(content: any) {
    this.modalService.open(content);
  }

  editDone() {
    this.editSuccess = false;
  }
}
