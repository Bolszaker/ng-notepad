import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotepadComponent } from './notepad/notepad.component';
import { SavednotesComponent } from './savednotes/savednotes.component';
import { WelcomeComponent } from './notepad/welcome/welcome.component';
import { SavednotesEditComponent } from './savednotes/savednotes-edit/savednotes-edit.component';
import { SavednotesStartComponent } from './savednotes/savednotes-start/savednotes-start.component';
import { SavednotesDetailsComponent } from './savednotes/savednotes-details/savednotes-details.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'notepad', component: NotepadComponent },
  {
    path: 'saved',
    component: SavednotesComponent,
    children: [
      { path: '', component: SavednotesStartComponent },
      { path: ':id', component: SavednotesDetailsComponent },
      { path: ':id/edit', component: SavednotesEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
