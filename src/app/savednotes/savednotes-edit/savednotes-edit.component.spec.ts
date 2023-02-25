import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavednotesEditComponent } from './savednotes-edit.component';

describe('SavednotesEditComponent', () => {
  let component: SavednotesEditComponent;
  let fixture: ComponentFixture<SavednotesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavednotesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavednotesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
