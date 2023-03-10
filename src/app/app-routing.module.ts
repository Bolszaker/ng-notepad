import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotepadComponent } from './notepad/notepad.component';
import { SavednotesComponent } from './savednotes/savednotes.component';
import { WelcomeComponent } from './notepad/welcome/welcome.component';
import { SavednotesEditComponent } from './savednotes/savednotes-edit/savednotes-edit.component';
import { SavednotesDetailsComponent } from './savednotes/savednotes-details/savednotes-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'notepad', component: NotepadComponent, title: 'Notepad' },
  {
    path: 'saved',
    component: SavednotesComponent,
    title: 'Notepad - Saved Notes',
    children: [
      {
        path: ':id',
        component: SavednotesDetailsComponent,
      },
      { path: ':id/edit', component: SavednotesEditComponent },
    ],
  },
  { path: 'about', component: AboutComponent, title: 'About' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
