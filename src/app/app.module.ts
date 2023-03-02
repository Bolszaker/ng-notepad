import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NotepadComponent } from './notepad/notepad.component';
import { WelcomeComponent } from './notepad/welcome/welcome.component';
import { SavednotesComponent } from './savednotes/savednotes.component';
import { SavednotesItemsComponent } from './savednotes/savednotes-items/savednotes-items.component';
import { SavednotesEditComponent } from './savednotes/savednotes-edit/savednotes-edit.component';
import { SavednotesDetailsComponent } from './savednotes/savednotes-details/savednotes-details.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotepadComponent,
    WelcomeComponent,
    SavednotesComponent,
    SavednotesItemsComponent,
    SavednotesEditComponent,
    SavednotesDetailsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
